from django.conf.urls import url
from . import views
from . import corpus

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^index/$', views.index, name='index'),
    url(r'^file_update/$', views.file_update, name='file_update'),
    url(r'^update/$', views.update, name='update'),
    url(r'^file_info/$', views.file_info, name='file_info'),
    url(r'^trans_type/$', views.trans_type, name='trans_type'),

    # 工作区
    # 中文编译界面
    # url(r'^(\d+)/work/$', views.work, name='work'),
    url(r'^work/$', views.work, name='work'),
    # 英文编译界面
    # url(r'^(\d+)/enwork/$', views.enwork, name='enwork'),
    # 下载/导出  word
    url(r'^downloads/(\d+)/$', views.downloads, name='downloads'),
    # 双语对照
    url(r'^shuangyu_downloads/(\d+)/$', views.shuangyu_downloads, name='shuangyu_downloads'),
    # url(r'^(\d+)/downloads_pdf/$', views.downloads_pdf, name='downloads_pdf'),

    # 删除文档项目
    url(r'^(\d+)/del_file/$', views.del_file, name='del_file'),
    # 单行/全部修改译文
    url(r'^(\d+)/([\s\S]*)/change_yiwen/$', views.change_yiwen, name='change_yiwen'),
    # 搜索原文
    url(r'serch_yuanwen/(\d+)/$', views.serch_yuanwen, name="serch_yuanwen"),
    url(r'serch_yiwen/(\d+)/$', views.serch_yiwen, name="serch_yiwen"),
    # 中文
    url(r'^bdjson/$', views.bdjson, name="bdjson"),
    url(r'^sgjson/$', views.sgjson, name="sgjson"),
    # 英文
    url(r'^en_baidu/$', views.en_baidu, name="en_baidu"),
    url(r'^en_sgjson/$', views.en_sgjson, name="en_sgjson"),
    # 德-中
    url(r'^bd_de_zh/$', views.bd_de_zh, name="bd_de_zh"),
    url(r'^sg_de_zh/$', views.sg_de_zh, name="sg_de_zh"),
    # 德-英
    url(r'^bd_de_en/$', views.bd_de_en, name="bd_de_en"),
    url(r'^sg_de_en/([\s\S]*)/(\d+)/$', views.sg_de_en, name="sg_de_en"),
    # url(r'all_change_yiwen/(\d+)/([\s\S]*)/$', views.all_change_yiwen, name="all_change_yiwen"),
    url(r'all_save_yiwen/(\d+)/([\s\S]*)/$', views.all_save_yiwen, name="all_save_yiwen"),
    url(r'change_befor/(\d+)/$', views.change_befor, name="change_befor"),
    url(r'change_old/(\d+)/$', views.change_old, name="change_old"),
    url(r'change_content/([\s\S]*)/(\d+)/$', views.change_content, name="change_content"),
    url(r'en_content_change/([\s\S]*)/(\d+)/$', views.en_content_change, name="en_content_change"),
    url(r'yuanwen_check/(\d+)/$', views.yuanwen_check, name="yuanwen_check"),
    url(r'yiwen_check/(\d+)/$', views.yiwen_check, name="yiwen_check"),
    # 中文编译
    # url(r'zh_rs/(\d+)/$', views.zh_rs, name="zh_rs"),
    # url(r'en_read_save/(\d+)/$', views.en_read_save, name="en_read_save"),
    # url(r'pre_translation/(\d+)/$', views.pre_translation, name="pre_translation"),
    # 原文的替换
    url(r'^tihuan_yuanwen/$', views.tihuan_yuanwen, name='tihuan_yuanwen'),
    # 译文的替换
    url(r'^tihuan_yiwen/$', views.tihuan_yiwen, name='tihuan_yiwen'),
    url(r'^yuliao/$', corpus.yuliao, name='yuliao'),
    # 获取当前翻译进度百分比
    url(r'^get_progress_num/(\d+)/$', views.get_progress_num, name='get_progress_num'),
    url(r'^get_detail_num/(\d+)/$', views.get_detail_num, name='get_detail_num'),
    url(r'^default_translation/$', views.default_translation, name='default_translation'),
    url(r'^endefault_translation/$', views.endefault_translation, name='endefault_translation'),
    url(r'^api/v1/get_work_data/$', views.get_work_data, name='get_work_data'),
    # url(r'^read_work/$', views.read_work, name='read_work'),
    # 验证译文书写是否规范
    url(r'^yiwen_check_is_True/$', views.yiwen_check_is_True, name='yiwen_check_is_True'),
    url(r'^show_wait/$', views.show_wait, name='show_wait'),
    url(r'^show_new_work/$', views.show_new_work, name='show_new_work'),
    url(r'^red_translation/(\d+)/$', views.red_translation, name='red_translation'),
    url(r'^ajax_display/$', views.ajax_display, name='ajax_display'),
    url(r'^get_all_par/$', views.get_all_par, name='get_all_par'),
    url(r'^yuliao/([\s\S]*)/$', corpus.yuliao, name='yuliao'),

]