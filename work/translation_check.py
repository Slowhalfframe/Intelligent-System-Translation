
'''
本文件是针对预编译过后的译文可能存在部分错误，实现检查错误和修改的一个文件

'''
import language_check
# 中-英
# language_tool_en = language_check.LanguageTool('en-US')
# 英-中
# language_tool_zh = language_check.LanguageTool('zh-CN')

def translate_check(bianyi_style,yiwen):
    language_tool = language_check.LanguageTool(bianyi_style)
    # 检测是否有错误和修改规则
    matches = language_tool.check(yiwen)

    # 判断是否有错误
    if len(matches) > 0:
        # 按照修改规则修改原文，并返回译文
        right_yiwen = language_check.correct(yiwen, matches)
        print('译文存在{}个错误'.format(len(matches)))
        return right_yiwen
    # 没有错误，返回原文
    else:
        print('预编译没有错误')
        return yiwen


def translate_matches(text):

    # 选择检测的语种
    language_tool = language_check.LanguageTool('en-US')

    # 检测文本提取规则
    matches = language_tool.check(text)
    errors = {}
    index = 0
    if len(matches) > 0:

        for m in matches:
            errors[m] = m.offset,m.errorlength
        return errors

    else:
        return None


