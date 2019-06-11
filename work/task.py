from __future__ import absolute_import, unicode_literals
import os, django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "second_Edition.settings")
django.setup()

# from . import models
import hashlib
import urllib
import json
import http
import requests
import random
import docx


# 百度 机器预翻译
def fanyi(content):
    appid = '20161209000033714'
    secretKey = 'qFO4jZBwNJrWj81yOcEs'
    httpClient = None
    myurl = '/api/trans/vip/translate'
    q = content
    fromLang = 'zh'
    toLang = 'en'
    salt = random.randint(32768, 65536)
    sign = appid + q + str(salt) + secretKey
    sign = hashlib.md5(sign.encode()).hexdigest()
    myurl = myurl + '?appid=' + appid + '&q=' + urllib.parse.quote(
        q) + '&from=' + fromLang + '&to=' + toLang + '&salt=' + str(
        salt) + '&sign=' + sign

    try:
        httpClient = http.client.HTTPConnection('api.fanyi.baidu.com')
        httpClient.request('GET', myurl)
        response = httpClient.getresponse()
        jsonResponse = response.read().decode("utf-8")
        js = json.loads(jsonResponse)
        dst = str(js["trans_result"][0]["dst"])
        print("百度翻译之后：", dst)
        return dst
    except Exception as e:
        print(e)
        return content
    finally:
        if httpClient:
            httpClient.close()


def enfanyi(content):
    appid = '20161209000033714'
    secretKey = 'qFO4jZBwNJrWj81yOcEs'
    httpClient = None
    myurl = '/api/trans/vip/translate'
    q = content
    fromLang = 'en'
    toLang = 'zh'
    salt = random.randint(32768, 65536)
    sign = appid + q + str(salt) + secretKey
    sign = hashlib.md5(sign.encode()).hexdigest()
    myurl = myurl + '?appid=' + appid + '&q=' + urllib.parse.quote(
        q) + '&from=' + fromLang + '&to=' + toLang + '&salt=' + str(
        salt) + '&sign=' + sign

    try:
        httpClient = http.client.HTTPConnection('api.fanyi.baidu.com')
        httpClient.request('GET', myurl)
        response = httpClient.getresponse()
        jsonResponse = response.read().decode("utf-8")
        js = json.loads(jsonResponse)
        dst = str(js["trans_result"][0]["dst"])
        print(dst)
        return dst
    except Exception as e:
        print(e)
        return content
    finally:
        if httpClient:
            httpClient.close()


def md5(str):
    m = hashlib.md5()
    m.update(str.encode("utf8"))
    return m.hexdigest()


# 搜狗 机器翻译
def zh_sg(q):
    try:
        url = "http://fanyi.sogou.com:80/reventondc/api/sogouTranslate"
        pid = "d2dcca8dea30c3dc0570788c204f5b8a"
        salt = "1508404016112"
        sign = md5(pid + q + salt + "475af5d76c46584ec5d35493b92f255b")
        payload = {"from": 'zh-CHS', "to": 'en', "pid": pid, 'q': q.encode('utf8'), 'salt': salt, 'sign': sign}
        headers = {
            'content-type': "application/x-www-form-urlencoded",
            'accept': "application/json"
        }
        response = requests.request("POST", url, data=payload, headers=headers)
        print(response.text)
        res = json.loads(response.text)
        res = res['translation']
        print(res)
        return res
    except Exception as e:
        print(e)
        return q


# 搜狗英文翻译
def en_sg(q):
    try:
        url = "http://fanyi.sogou.com:80/reventondc/api/sogouTranslate"
        pid = "d2dcca8dea30c3dc0570788c204f5b8a"
        salt = "1508404016112"
        sign = md5(pid + q + salt + "475af5d76c46584ec5d35493b92f255b")
        payload = {"from": 'en', "to": 'zh-CHS', "pid": pid, 'q': q.encode('utf8'), 'salt': salt, 'sign': sign}
        headers = {
            'content-type': "application/x-www-form-urlencoded",
            'accept': "application/json"
        }
        response = requests.request("POST", url, data=payload, headers=headers)
        print(response.text)
        res = json.loads(response.text)
        res = res['translation']
        print(res)
        return res
    except Exception as e:
        print(e)
        return q


# 百度翻译
def de_en_fanyi(content):
    appid = '20161209000033714'
    secretKey = 'qFO4jZBwNJrWj81yOcEs'
    httpClient = None
    myurl = '/api/trans/vip/translate'
    q = content
    fromLang = 'de'
    toLang = 'en'
    salt = random.randint(32768, 65536)
    sign = appid + q + str(salt) + secretKey
    sign = hashlib.md5(sign.encode()).hexdigest()
    myurl = myurl + '?appid=' + appid + '&q=' + urllib.parse.quote(
        q) + '&from=' + fromLang + '&to=' + toLang + '&salt=' + str(
        salt) + '&sign=' + sign

    try:
        httpClient = http.client.HTTPConnection('api.fanyi.baidu.com')
        httpClient.request('GET', myurl)
        response = httpClient.getresponse()
        jsonResponse = response.read().decode("utf-8")
        js = json.loads(jsonResponse)
        dst = str(js["trans_result"][0]["dst"])
        print("百度翻译之后：", dst)
        return dst
    except Exception as e:
        print(e)
        return content
    finally:
        if httpClient:
            httpClient.close()


# 百度翻译
def de_zh_fanyi(content):
    appid = '20161209000033714'
    secretKey = 'qFO4jZBwNJrWj81yOcEs'
    httpClient = None
    myurl = '/api/trans/vip/translate'
    q = content
    fromLang = 'de'
    toLang = 'zh'
    salt = random.randint(32768, 65536)
    sign = appid + q + str(salt) + secretKey
    sign = hashlib.md5(sign.encode()).hexdigest()
    myurl = myurl + '?appid=' + appid + '&q=' + urllib.parse.quote(
        q) + '&from=' + fromLang + '&to=' + toLang + '&salt=' + str(
        salt) + '&sign=' + sign

    try:
        httpClient = http.client.HTTPConnection('api.fanyi.baidu.com')
        httpClient.request('GET', myurl)
        response = httpClient.getresponse()
        jsonResponse = response.read().decode("utf-8")
        js = json.loads(jsonResponse)
        dst = str(js["trans_result"][0]["dst"])
        print("百度翻译之后：", dst)
        return dst
    except Exception as e:
        print(e)
        return content
    finally:
        if httpClient:
            httpClient.close()

# 搜狗 机器翻译
def de_en_sg(q):
    try:
        url = "http://fanyi.sogou.com:80/reventondc/api/sogouTranslate"
        pid = "d2dcca8dea30c3dc0570788c204f5b8a"
        salt = "1508404016112"
        sign = md5(pid + q + salt + "475af5d76c46584ec5d35493b92f255b")
        payload = {"from": 'de', "to": 'en', "pid": pid, 'q': q.encode('utf8'), 'salt': salt, 'sign': sign}
        headers = {
            'content-type': "application/x-www-form-urlencoded",
            'accept': "application/json"
        }
        response = requests.request("POST", url, data=payload, headers=headers)
        print(response.text)
        res = json.loads(response.text)
        res = res['translation']
        print(res)
        return res
    except Exception as e:
        print(e)
        return q


def de_zh_sg(q):
    try:
        url = "http://fanyi.sogou.com:80/reventondc/api/sogouTranslate"
        pid = "d2dcca8dea30c3dc0570788c204f5b8a"
        salt = "1508404016112"
        sign = md5(pid + q + salt + "475af5d76c46584ec5d35493b92f255b")
        payload = {"from": 'de', "to": 'zh-CHS', "pid": pid, 'q': q.encode('utf8'), 'salt': salt, 'sign': sign}
        headers = {
            'content-type': "application/x-www-form-urlencoded",
            'accept': "application/json"
        }
        response = requests.request("POST", url, data=payload, headers=headers)
        print(response.text)
        res = json.loads(response.text)
        res = res['translation']
        print(res)
        return res
    except Exception as e:
        print(e)
        return q