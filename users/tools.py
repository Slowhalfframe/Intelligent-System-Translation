import random,string
# 引入hmac模块
import hmac
# 引入hashlib模块
import hashlib
import logging
import re
from PIL import Image,ImageDraw,ImageFont,ImageFilter
# 引入settings
from second_Edition import settings
from django.shortcuts import render


# 获取一个随机字符串，4位的
def getRandomChar(count=4):
    # 生成随机字符串
    # string模块包含各种字符串，一下位小写字母加数字

    ran = string.ascii_lowercase + string.ascii_uppercase + string.digits
    char = ''
    for i in range(count):
        char += random.choice(ran)
    return char


# 返回一个随机的RGB颜色
def getRandomColor():
    return (random.randint(50,150),random.randint(50,150),random.randint(50,150))


def create_code():
    # 创建图片，模式，大小，背景色
    img = Image.new('RGB',(120,30),(255,255,255))
    # 创建画布
    draw = ImageDraw.Draw(img)
    # 设置字体
    # font = ImageFont.load_default().font
    font = ImageFont.truetype(r'users/arial.ttf', 25)
    code = getRandomChar()
    # 将生成的字符画在画布上
    for t in range(4):
        draw.text((30*t+5,0),code[t],getRandomColor(),font)

    # 生成干扰点
    for _ in range(random.randint(0,200)):
        # 位置，颜色
        draw.point((random.randint(0, 120),random.randint(0, 20)), fill=getRandomColor())

    # 使用模糊滤镜使用图片模糊
    # img = img.filter(ImageFilter.BLUR)
    # 保存
    # img.save(''.join(code)+'.jpg')
    return img, code


if __name__ == '__main__':
    print(create_code())


def hashlib_md5(pwd):
    # 用utf-8编码将pwd进行md5编码
    md5 = hashlib.md5(pwd.encode("utf-8"))
    # 在原基础上加入定义在setting的盐值混淆加密
    md5.update(settings.MD5_SALT.encode("utf-8"))
    # 返回16进制的加密后的字符串
    return md5.hexdigest()

def hmac_md5(pwd):
    # 返回一个16进制的加密后的字符串
    return hmac.new(pwd.encode("utf-8"), settings.MD5_SALT.encode("utf-8"), "MD5").hexdigest()
    #                    密码                 盐值混淆                     加密方式   输出格式