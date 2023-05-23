from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from django.db import models
from django.contrib.auth.models import AbstractUser

# Must meet the format: year-semester
# E.g., 2023-0
# Semester must only be either 0 or 1
def validate_semester(value: str):
    valid = False

    if value.count('-') == 1:
        parts = value.split('-')
        year = parts[0]
        semester = parts[1]
        if year.isdigit() and semester.isdigit():
            year = int(year)
            semester = int(semester)
            valid = (2022 <= year < 2100) and (0 <= semester <= 1)

    if not valid:
        raise ValidationError('学期需要是xxxx-0或xxxx-1的格式，且年份必须有效')

class Player(AbstractUser):
    username = models.CharField(verbose_name='账号', max_length=16, unique=True)
    is_staff = models.BooleanField(verbose_name='是否为管理员', default=False)
    is_active = models.BooleanField(verbose_name='是否注册', default=False)
    full_name = models.CharField(verbose_name='姓名', max_length=16, blank=True)
    student_class = models.CharField(verbose_name='班级', max_length=16, blank=True)
    headquarter = models.BooleanField(verbose_name='是否本部', default=True)
    semester = models.CharField(verbose_name='学期', max_length=8, default='2022-1', validators=[validate_semester])

    def __str__(self):
        return self.username
