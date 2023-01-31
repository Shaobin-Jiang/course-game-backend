from django.db import models
from user.models import Player

class Game(models.Model):
    user = models.ForeignKey(Player, on_delete=models.CASCADE, verbose_name='用户')
    session = models.PositiveSmallIntegerField(verbose_name='研究 (从0开始)', default=0)
    level = models.PositiveSmallIntegerField(verbose_name='关卡 (从0开始)', default=0)
    scene = models.PositiveSmallIntegerField(verbose_name='小关卡 (从0开始)', default=0)

    def __str(self):
        return str(self.user) + ' 游戏进度'

    class Meta:
        abstract = True

class ClassicStudies1(Game):
    class Meta:
        verbose_name = '心理学经典研究I'
        verbose_name_plural = '心理学经典研究I'
        permissions = (
            ('play_ClassicStudies1', '允许进行 心理学经典研究I 小游戏'),
        )

class ClassicStudies2(Game):
    class Meta:
        verbose_name = '心理学经典研究II'
        verbose_name_plural = '心理学经典研究II'
        permissions = (
            ('play_ClassicStudies2', '允许进行 心理学经典研究II 小游戏'),
        )

