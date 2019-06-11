#!/usr/bin/python
# 将相对路径转换为绝对路径
from __future__ import absolute_import, unicode_literals
from celery import Celery
# 定义了一个Celery的App
import os
from celery import Celery
from django.conf import settings
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'second_Edition.settings')
app = Celery('work')
app.config_from_object('django.conf:settings')
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)
