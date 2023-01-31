from django.apps import AppConfig

default_app_config = 'index.IndexConfig'

class IndexConfig(AppConfig):
    name = 'index'
    verbose_name = '游戏列表'
