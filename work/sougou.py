from sogou_translate import SogouTranslate, SogouLanguages

# trans = SogouTranslate('d2dcca8dea30c3dc0570788c204f5b8a', '475af5d76c46584ec5d35493b92f255b')


# def sougou_zh(text):
#     en_text = text
#     zh_text = trans.translate(en_text, from_language=SogouLanguages.ZH_CHS, to_language=SogouLanguages.EN)
#     print(zh_text) # '你好，世界！'
#     return zh_text

# sougou_zh("我")


#!/usr/bin/python
# import requests
# import hashlib
#
#
# def md5(str):
#     m = hashlib.md5()
#     m.update(str.encode("utf8"))
#     return m.hexdigest()
#
# url = "http://fanyi.sogou.com:80/reventondc/api/sogouTranslate"
# pid = "ghohank"
# salt = "1508404016012"
# q = "搜狗"
# sign = md5(pid+q+salt+"yourSecretKey");
# print(sign)
#
# #in the case, the pid with the key counts sign will be in this.
# # sign = "882e9c08aba3b673d055a6d1a14d0c9f"
#
# payload = "from=auto&to=en&pid=" + pid + "&q=" + q + "&sign=" + sign + "&salt=" + salt
# headers = {
#     'content-type': "application/x-www-form-urlencoded",
#     'accept': "application/json"
#     }
# response = requests.request("POST", url, data=payload, headers=headers)
# print(response.text)
