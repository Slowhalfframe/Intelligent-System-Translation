import os
import smtplib
from email.mime.text import MIMEText
from email.utils import formataddr
from itsdangerous import TimedJSONWebSignatureSerializer


os.environ['DJANGO_SETTINGS_MODULE'] = 'second_Edition.settings'


def mail(user_email, id):
    SECRET_KEY = 's(do(h$i-d3rzrx7yhw@ik!cgwg+52-c#roc*3gk#wfk2y@1=2'
    s = TimedJSONWebSignatureSerializer(SECRET_KEY, expires_in=3600*64)
    token = s.dumps({'confirm': id})
    token = token.decode('utf8')
    print(token)
    url = "http://trans.kfyee.com/users/email_verification/{0}".format(token)
    # 发件人邮箱账号
    my_sender = '1441576268@qq.com'

    # 发件人邮箱密码 密码不是真正的密码是 授权码，授权码是用于登录第三方邮件客户端的专用密码。
    my_pass = 'szlcejiprutxbafa'

    # 收件人邮箱账号
    # my_user = '18569938068@163.com'
    my_user = user_email
    # print("开始填信")
    ret = True
    mail_msg = '<h1>欢迎您注册本网站</h1>请点击下方链接进行激活登陆<br><a href="{0}">点我激活登陆</a>'.format(url)
    msg = MIMEText(mail_msg, 'html', 'utf-8')
    msg['From'] = formataddr(["快帆快译", my_sender])
    msg['To'] = formataddr(["尊敬的", my_user])
    msg['Subject'] = '快帆快译--智能协调翻译系统'
    server = smtplib.SMTP_SSL("smtp.qq.com", 465)
    server.login(my_sender, my_pass)
    server.sendmail(my_sender, [my_user, ], msg.as_string())
    server.quit()
    print("end")
    ret = False
    return ret


def forget_email(user_email, id):
    SECRET_KEY = 's(do(h$i-d3rzrx7yhw@ik!cgwg+52-c#roc*3gk#wfk2y@1=2'
    s = TimedJSONWebSignatureSerializer(SECRET_KEY, expires_in=3600*0.5)
    token = s.dumps({'confirm': id})
    token = token.decode('utf8')
    print(token)
    url = "http://trans.kfyee.com/users/forget_pwd/{0}".format(token)
    # 发件人邮箱账号
    my_sender = '1441576268@qq.com'

    # 发件人邮箱密码 密码不是真正的密码是 授权码，授权码是用于登录第三方邮件客户端的专用密码。
    my_pass = 'szlcejiprutxbafa'

    # 收件人邮箱账号
    # my_user = '18569938068@163.com'
    my_user = user_email
    # print("开始填信")
    ret = True
    mail_msg = '<h1>欢迎您</h1>请点击下方链接进行密码找回(30分钟内有效)<br><a href="{0}">点我激活登陆</a>'.format(url)
    msg = MIMEText(mail_msg, 'html', 'utf-8')
    msg['From'] = formataddr(["快帆快译", my_sender])
    msg['To'] = formataddr(["尊敬的", my_user])
    msg['Subject'] = '快帆快译--智能协调翻译系统'
    server = smtplib.SMTP_SSL("smtp.qq.com", 465)
    server.login(my_sender, my_pass)
    server.sendmail(my_sender, [my_user, ], msg.as_string())
    server.quit()
    print("end")
    ret = False
    return ret

