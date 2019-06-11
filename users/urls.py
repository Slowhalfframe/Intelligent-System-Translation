from django.conf.urls import url
from . import views

urlpatterns = [
    # 登录页面
    url(r'^$', views.user_login, name='sign_in'),
    url(r'^login/$', views.user_login, name='sign_in'),
    # 注册页面
    url(r'^register/$', views.register, name='register'),
    # 验证码
    url(r'^code/$', views.code, name='code'),
    # 验证邮箱是否可用
    url(r'^(.*)/checkemail/$', views.checkemail, name='checkemail'),
    # 验证昵称
    url(r'^(.*)/checkusername/$', views.checkusername, name='checkusername'),
    # 注册后提示
    url(r'^tips$', views.tips, name='tips'),
    # 邮箱验证
    url(r'^email_verification/(?P<token>.*)$', views.email_verification, name='email_verification'),
    url(r'^forget_pwd/(?P<token>.*)$', views.forget_pwd, name='forget_pwd'),
    # 验证码验证
    url(r'^(\w+)/checkcode/$', views.checkcode, name='checkcode'),
    # 退出登录
    url(r'^user_logout/$', views.user_logout, name='user_logout'),
    # 个人主页
    url(r'^(\d+)/user_info/$', views.user_info, name='user_info'),
    # ajax验证旧密码
    url(r'^(\w+)/check_password/$', views.check_password, name='check_password'),
    # 修改密码
    url(r'change_pwd/', views.change_pwd, name='change_pwd'),
    # 修改昵称
    url(r'(\w+)/change_username/', views.change_username, name='change_username'),
    # 修改邮箱
    url(r'change_email/', views.change_email, name='change_email'),
    # 忘记密码
    url(r'forget_password/', views.forget_password, name='forget_password'),
    url(r'change_forget_pwd/', views.change_forget_pwd, name='change_forget_pwd'),
    url(r'change_userinfo/', views.change_userinfo, name='change_userinfo'),
]