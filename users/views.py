from django.shortcuts import render, HttpResponse
from django.http import JsonResponse, HttpResponseRedirect, HttpResponse
from django.shortcuts import redirect   # 路由重定向
from django.contrib.auth.models import User     # 内置用户
from django.contrib.auth import authenticate, login, logout     # 内置的用户认证
from django.contrib.auth.decorators import login_required       # 登录检查
from itsdangerous import TimedJSONWebSignatureSerializer
from . import models
from . import tools
from io import BytesIO  # 在内存中读写bytes
from . import zsend_email
from django.db import transaction
import os
os.environ['DJANGO_SETTINGS_MODULE'] = 'second_Edition.settings'


# 登录
def user_login(request):
    if request.method == 'GET':
        try:
            next_url = request.GET['next']
            print(next_url)
        except:
            next_url = "/work/"
        print(next_url)
        return render(request, 'users/sign_in.html', {"next_url": next_url})
        # return render(request, 'users/sign_in.html', {})
    if request.method == 'POST':
        username = request.POST['username'].strip()
        password = request.POST['password'].strip()
        islong = request.POST.get("islong", "no")
        next_url = request.POST.get("next", "/work/")
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                request.session["LoginUser"] = user
                if islong == "on":
                    request.session.set_expiry(3600 * 24 * 7)
                elif islong == "":
                    request.session.set_expiry(0)
                if next_url == '':
                    next_url = '/work/'
                return redirect(next_url)
            else:
                return render(request, 'users/sign_in.html', {"msg": "未激活"})
        else:
            return render(request, 'users/sign_in.html', {"msg": "账户、密码错误或账户未激活"})


# 注册
def register(request):
    if request.method == 'GET':
        print('aaa')
        return render(request, 'users/register.html', {})
    if request.method == 'POST':
        username = request.POST['username'].strip()
        email = request.POST['email'].strip()
        password = request.POST['password'].strip()
        querenpassword = request.POST['confirm_password'].strip()
        code = request.POST['code']
        # 后台验证
        if code.upper() != request.session['code'].upper():
            return render(request, 'users/register.html', {"msg": "验证码不正确，请重新注册"})
        if len(password) < 6:
            return render(request, 'users/register.html', {"msg": "密码长度不足6位，请重新注册"})
        if password != querenpassword:
            return render(request, 'users/register.html', {"msg": "两次输入密码不一致，请重新注册"})
        try:
            # 用户名验证
            User.objects.get(email=email)
            return render(request, 'users/register.html', {"msg": "用户名已存在，请重新注册"})
        except:
            try:
                # create_user辅助函数创建用户
                print("2222222222")
                # with transaction.commit_on_success():
                print('11111111')
                user = User.objects.create_user(password=password, username=username, email=email, is_active=0)
                print(user)
                usera = models.users_more_info(user=user)
                print(usera)
                print("save")
                user.save()
                print("user_save")
                usera.save()
                # 发送验证邮件
                print("发送邮件")
                zsend_email.mail(user.email, user.id)
                # return render(request, "user/tiaozhuan.html", {"msg": "恭喜注册成功，请登录"})
                return redirect('/users/tips')
            except:
                return render(request, "users/register.html", {"msg": "注册失败，请重新注册"})


# 验证码 函数
def code(request):
    img, code = tools.create_code()
    # 首先需要将code 保存到session 中
    request.session['code'] = code
    # 返会图片
    file = BytesIO()
    img.save(file, 'PNG')
    return HttpResponse(file.getvalue(), "image/png")


# ajax验证邮箱
def checkemail(request, email):
    try:
        User.objects.get(email=email)
        return JsonResponse({"msg": "此邮箱已注册，请重新输入", "success": False})
    except:
        return JsonResponse({"msg": "邮箱可用，请继续输入", "success": True})


# ajax验证邮箱
def checkusername(request, username):
    try:
        User.objects.get(username=username)
        return JsonResponse({"msg": "此昵称已注册，请重新输入", "success": False})
    except:
        return JsonResponse({"msg": "昵称可用，请继续输入", "success": True})


# 邮箱链接激活
def email_verification(request, token):
    SECRET_KEY = 's(do(h$i-d3rzrx7yhw@ik!cgwg+52-c#roc*3gk#wfk2y@1=2'
    s = TimedJSONWebSignatureSerializer(SECRET_KEY, expires_in=3600*64)
    try:
        data = s.loads(token)
        id = data["confirm"]
        print(id)
        user = User.objects.get(pk=id)
        user.is_active = 1
        user.save()
        return redirect('/users/')
    # 验证失败，会抛出异常
    except:
        print("over")
        return HttpResponse('激活链接已过期')


# 注册之后跳转提示界面
def tips(request):
    return render(request, 'users/tips.html', {})


# ajax验证验证码
def checkcode(request, code):
    s_code = request.session['code']
    if s_code.upper() != code.upper():
        return JsonResponse({"msg": "验证码错误，请重新填写", "success": False})
    else:
        return JsonResponse({"msg": "验证码正确，请注册", "success": True})


# 退出登录
@login_required
def user_logout(request):
    logout(request)
    return redirect('/')


# 个人主页
@login_required
def user_info(request, id):
    user = models.users_more_info.objects.get(user=id)
    return render(request, 'users/user_info.html', {'user_info': user})


# 修改个人信息
def change_userinfo(request):
    ret = {'code': 0}
    if request.method == 'POST':
        # try:
        xueli = request.POST['xueli']
        zhuanye = request.POST['zhuanye']
        sex_id = request.POST['sex']
        print(xueli, zhuanye)
        xl = models.XueLi.objects.get(pk=xueli)
        xl_name = xl.xueli_name
        sex = models.sex.objects.get(pk=sex_id)
        sex_name = sex.sex_name
        user = request.user
        user_more_info = models.users_more_info.objects.get(user=user)
        user_more_info.xueli = xl
        user_more_info.zhuanye = zhuanye
        user_more_info.sex = sex
        user_more_info.save()
        print(xl_name, zhuanye, sex_name)
        ret['data'] = {
            'xueli': xl_name,
            'zhuanye': zhuanye,
            'sex': sex_name,
        }
        # except Exception as e:
        #     ret['msg'] = "异常", e
        #     ret['code'] = -1
    else:
        ret['code'] = -2
        ret['msg'] = '请求方式出错'
    print(ret)
    return JsonResponse(ret)


# 修改密码
@login_required
def change_pwd(request):
    old_pwd = request.POST['old_pwd'].strip()
    new_pwd = request.POST['new_pwd'].strip()
    new_pwd2 = request.POST['new_pwd2'].strip()
    print(old_pwd, new_pwd, new_pwd2)

    user = User.objects.get(pk=request.user.id)
    user = authenticate(username=user.username, password=old_pwd)
    if user is None:
        return redirect(request, 'users/user_info.html', {'script': "alert", 'wrong': '输入的旧密码不正确'})
    else:
        if new_pwd != new_pwd2:
            return render(request, 'users/user_info.html', {'script': "alert", 'wrong': '两次输入的密码不相同'})
            # return HttpResponseRedirect('/users/'+str(user.id)+'/user_info?script=alert&wrong=两次输入的密码不相同')
        else:
            user.set_password(new_pwd)
            user.save()
            user_logout(request)
            return redirect('/users/')
            # except:
            #     return render(request, 'users/user_info.html', {'script': "alert", 'wrong': '修改密码失败'})


# ajax验证旧密码
@login_required
def check_password(request, old_pwd):
    u = User.objects.get(pk=request.user.id)
    print(u)
    print(u.username)
    user = authenticate(username=u.username, password=old_pwd)
    if user is None:
        return JsonResponse({"msg": "输入的旧密码不正确", "success": False})
    else:
        return JsonResponse({"msg": "", "success": True})


def change_username(request, username):
    # ajax实现修改昵称
    user = User.objects.get(pk = request.user.id)
    if len(username) != 0:
        user.username = username
        user.save()
        return JsonResponse({"msg": "", "success": True})


def change_email(request, email):
    # ajax实现修改邮箱
    pass

    # 参考验证旧密码，路由还没有配  \W+


# 忘记密码
def forget_password(request):
    '''
    忘记密码： 点击忘记密码->输入注册邮箱->进入邮箱->私密链接 30分钟内有效 ->点击链接后：直接可设置新密码->成功跳转至登录页面->失败 显示失败原因
    '''
    if request.method == 'GET':
        return render(request, 'users/forget_password.html', {})
    if request.method == 'POST':
        email = request.POST['email']
        print(email)
        user = User.objects.get(email=email)
        print(user)
        print(user.id)
        zsend_email.forget_email(email, user.id)
        return JsonResponse({'code': 0})


# 找回密码
def forget_pwd(request, token):
    SECRET_KEY = 's(do(h$i-d3rzrx7yhw@ik!cgwg+52-c#roc*3gk#wfk2y@1=2'
    s = TimedJSONWebSignatureSerializer(SECRET_KEY, expires_in=3600 * 0.5)
    try:
        data = s.loads(token)
        id = data["confirm"]
        print(id)
        return render(request, 'users/forget_pwd.html', {'id': id})
    except:
        print("over")
        return HttpResponse('激活链接已过期')


# 获取邮箱和修改找回密码
def change_forget_pwd(request):
    ret = {'code': 0}
    if request.method == 'GET':
        try:
            id = request.GET['id']
            user = User.objects.get(pk=id)
            ret['data'] = {
                'username': user.username,
                'email': user.email,
            }
        except Exception as e:
            ret['code'] = -1
            ret['msg'] = e
        return JsonResponse(ret)

    if request.method == 'POST':
        try:
            new_pwd = request.POST['password']
            id = request.POST['id']
            user = User.objects.get(pk=id)
            user.set_password(new_pwd)
            user.save()
        except Exception as e:
            ret['code'] = -1
            ret['msg'] = e
        return JsonResponse(ret)


