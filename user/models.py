from django.db import models
from django.contrib.auth.models import AbstractUser

class Player(AbstractUser):
    username = models.CharField(verbose_name='账号', max_length=16, unique=True)
    is_staff = models.BooleanField(verbose_name='是否为管理员', default=False)
    is_active = models.BooleanField(verbose_name='是否注册', default=False)
    full_name = models.CharField(verbose_name='姓名', max_length=16, blank=True)
    student_class = models.CharField(verbose_name='班级', max_length=16, blank=True)

    def __str__(self):
        return self.username
