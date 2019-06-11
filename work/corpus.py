import requests
import json
import re
from .task import fanyi, enfanyi, zh_sg, en_sg
from django.http import HttpResponse

def yuliao(request, str):
    print("laile")
    headers = {
        "Content-Type": "application/json",
    }
    url = 'http://172.26.35.57:8888/query'
    pyload = {"input": str}
    response = requests.post(url, data=json.dumps(pyload), headers=headers).text
    print("调用语料库结果：", response)
    return HttpResponse(response)
    # return response


def yuliaoku(str):
    headers = {
        "Content-Type": "application/json",
    }
    url = 'http://172.26.35.57:8888/query'
    pyload = {"input": str}
    response = requests.post(url, data=json.dumps(pyload), headers=headers).text
    print("调用语料库结果：", response)
    return response

from . import translation_check


def check_all_num(text):
    '''
    检查一个文本是否是纯数字，是纯数字不翻译
    :param text:
    :return:
    '''
    reg = r'[0-9.,%]'

    t = re.findall(reg, text)
    ts = ''.join(t)

    if len(ts) == len(text):
        pass
    else:
        raise AttributeError



def split_str(str, zl, mubiao):
    print("进入翻译：", str)
    p = []
    num = 0
    count_num = 0
    try:
        check_all_num(str.strip())
        over = str
        print('遇到纯数字', '8' * 90)
        p.append(over)
        print(p)

    except:
        x_re = re.split(r'[。.]', str)
        count = len(x_re)
        while count > 0:
            if x_re[num].strip() != '':
                print("调用语料库")
                over = yuliaoku(x_re[num])
                # over = x_re[num] + "。"
                print("语料库结果：", over)
                # 比较两者的hashz值是否一样
                over_str = over.replace('\n', '').strip()
                yuan_str_demo = x_re[num]
                yuan_str = yuan_str_demo.strip()
                print(over_str, '☆' * 9)
                print(yuan_str, '★' * 9)
                if over_str == yuan_str:
                    print("语料库没有对应的句子")
                    if mubiao == 2:
                        print("中译英")
                        if zl == 1:
                            print("使用百度")
                            over = fanyi(x_re[num].strip())
                            if type(over) == 'str':
                                over = translation_check.translate_check('en-US', over)
                            print("百度翻译结果：", over)
                        if zl == 2:
                            print("使用搜狗")
                            over = zh_sg(x_re[num].strip())
                            if type(over) == 'str':
                                over = translation_check.translate_check('en-US', over)
                            print("搜狗翻译结果：", over)
                    if mubiao == 1:
                        print("英译中")
                        if zl == 1:
                            print("使用百度")
                            over = enfanyi(x_re[num].strip())
                            if type(over) == 'str':
                                over = translation_check.translate_check('zh-CN', over)
                            print("百度翻译结果：", over)
                        if zl == 2:
                            print("使用搜狗")
                            over = en_sg(x_re[num].strip())
                            if type(over) == 'str':
                                over = translation_check.translate_check('zh-CN', over)
                            print("搜狗翻译结果：", over)
                    if mubiao == 3:
                        print("德译中")
                        if zl == 1:
                            print("使用百度")
                            over = de_zh_fanyi(x_re[num].strip())
                            if type(over) == 'str':
                                over = translation_check.translate_check('zh-CN', over)
                            print("百度翻译结果：", over)
                        if zl == 2:
                            print("使用搜狗")
                            over = de_zh_sg(x_re[num].strip())
                            if type(over) == 'str':
                                over = translation_check.translate_check('zh-CN', over)
                            print("搜狗翻译结果：", over)

                    if mubiao == 4:
                        print("德译英")
                        if zl == 1:
                            print("使用百度")
                            over = de_en_fanyi(x_re[num].strip())
                            if type(over) == 'str':
                                over = translation_check.translate_check('zh-CN', over)
                            print("百度翻译结果：", over)
                        if zl == 2:
                            print("使用搜狗")
                            over = de_en_sg(x_re[num].strip())
                            if type(over) == 'str':
                                over = translation_check.translate_check('zh-CN', over)
                            print("搜狗翻译结果：", over)
                else:
                    print("语料库已匹配到")
                    count_num += 1
            else:
                print("未调用预料和机器，因其为空")
                over = x_re[num]
            count -= 1
            num += 1
            p.append(over)
            print(p)
    print("***" * 9)
    print(p)
    # if len(p) > 0:
        # 用于移除字符串头尾指定的字符（默认为空格或换行符）或字符序列
        # p = [x.strip() for x in p]
    # if len(p) > 0:
    #     print(p[-1])
    #     p[-1] = p[-1]
    #     print(p)
    ss = "".join(p)
    print(ss)
    print(type(ss))
    return ss, count_num



