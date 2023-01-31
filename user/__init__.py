from django.apps import AppConfig

default_app_config = 'user.IndexConfig'

class IndexConfig(AppConfig):
    name = 'user'
    verbose_name = '用户管理'
