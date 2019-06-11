# Intelligent-System-Translation
# 智能系统翻译
基于django的只能协同翻译系统。主要依赖于django-docx库

## 环境
* python 3.6.5
* django 1.11
* mysql

## 主要依赖包
* django-docx

## 实现功能
* 用户可以上传word文档，先进行机器翻译，之后可人工在线进行修改翻译，最终导出译文和双语对照版
* 目前支持语言：中译英，英译中，德译英， 德译中
