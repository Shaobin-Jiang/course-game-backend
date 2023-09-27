from django.contrib import admin, messages
from django.contrib.auth.admin import Group, UserAdmin
from django.contrib.auth.models import Permission
from django.db import models
from django.forms import TextInput
from django.utils.translation import gettext_lazy as _
from django.utils.translation import ngettext
from .models import Player

admin.site.site_title = '课程游戏管理系统'
admin.site.site_header = '课程游戏管理系统'

@admin.register(Player)
class PlayerAdmin(UserAdmin):
    actions = [
        'authorize_classic_studies_1', 
        'ban_classic_studies_1',
        'authorize_classic_studies_2', 
        'ban_classic_studies_2',
    ]

    search_fields = ('username', 'full_name')

    list_display = [
        'username', 'full_name', 'student_class', 'email', 'semester', 'is_staff', 'is_active', 'headquarter'
    ]

    list_display_links = ['username']

    list_editable = ('full_name', 'student_class', 'email', 'is_active', 'semester')

    list_filter = ['student_class', 'is_staff', 'is_active', 'headquarter', 'semester']

    formfield_overrides = {
        models.CharField: {'widget': TextInput(attrs={'size': '16'})}
    }

    ordering = ['full_name', 'username', 'student_class', 'is_staff']

    list_per_page = 200

    # Show the module on the admin index page
    def has_module_permission(self, request):
        has_permission = super().has_module_permission(request)
        return request.user.is_staff or has_permission

    def has_view_permission(self, request, obj=None):
        has_permission = super().has_view_permission(request, obj)
        return request.user.is_staff or has_permission

    def has_change_permission(self, request, obj=None):
        has_permission = super().has_change_permission(request, obj)
        return request.user.is_staff or has_permission

    def get_list_display(self, request):
        if not request.user.is_superuser:
            return ['username', 'full_name', 'student_class', 'is_active']
        else:
            return self.list_display

    def get_list_filter(self, request):
        if not request.user.is_superuser:
            return ['student_class', 'is_staff', 'is_active']
        else:
            return self.list_filter

    def get_readonly_fields(self, request, obj=None):
        if request.user.is_superuser:
            self.readonly_fields = []
        else:
            self.readonly_fields = ['is_superuser', 'groups', 'user_permissions']
        return self.readonly_fields

    def get_queryset(self, request):
        queryset = super(PlayerAdmin, self).get_queryset(request)
        if request.user.is_superuser:
            return queryset
        else:
            return queryset.filter(is_superuser=False).filter(headquarter=request.user.headquarter)

    def get_fieldsets(self, request, obj=None):
        fieldsets = (
            (_('Personal info'), {'fields': ('username', 'full_name', 'student_class', 'headquarter', 'email')}),
            (_('Permissions'), {'fields': ('is_active','is_staff', 'is_superuser', 'groups', 'user_permissions',),},),
            (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
        )

        if not obj:
            return (
                (_('Personal info'), {'fields': ('username', 'full_name', 'student_class', 'headquarter', 'email', 'semester', 'password1', 'password2')}),
                (_('Permissions'), {'fields': ('is_active','is_staff', 'is_superuser', 'groups',),},),
            )
        else:
            return fieldsets

    # Actions
    @admin.action(description='允许游玩 心理学经典研究I 小游戏')
    def authorize_classic_studies_1(self, request, queryset):
        # permission = Permission.objects.filter(codename='play_ClassicStudies1')[0]
        group = Group.objects.get(name='心理学经典研究I')
        targets = list(queryset)
        for player in targets:
            player.groups.add(group)
        self.message_user(request, ngettext('成功添加 %d 名玩家', '成功添加 %d 名玩家', len(targets),) % len(targets), messages.SUCCESS)

    @admin.action(description='禁止游玩 心理学经典研究I 小游戏')
    def ban_classic_studies_1(self, request, queryset):
        group = Group.objects.get(name='心理学经典研究I')
        targets = list(queryset)
        for player in targets:
            player.groups.remove(group)
        self.message_user(request, ngettext('成功移除 %d 名玩家', '成功移除 %d 名玩家', len(targets),) % len(targets), messages.SUCCESS)

    @admin.action(description='允许游玩 心理学经典研究II 小游戏')
    def authorize_classic_studies_2(self, request, queryset):
        group = Group.objects.get(name='心理学经典研究II')
        targets = list(queryset)
        for player in targets:
            player.groups.add(group)
        self.message_user(request, ngettext('成功添加 %d 名玩家', '成功添加 %d 名玩家', len(targets),) % len(targets), messages.SUCCESS)

    @admin.action(description='禁止游玩 心理学经典研究II 小游戏')
    def ban_classic_studies_2(self, request, queryset):
        group = Group.objects.get(name='心理学经典研究II')
        targets = list(queryset)
        for player in targets:
            player.groups.remove(group)
        self.message_user(request, ngettext('成功移除 %d 名玩家', '成功移除 %d 名玩家', len(targets),) % len(targets), messages.SUCCESS)

    authorize_classic_studies_1.confirm = '确认执行？'
    ban_classic_studies_1.confirm = '确认执行？'
    authorize_classic_studies_2.confirm = '确认执行？'
    ban_classic_studies_2.confirm = '确认执行？'
