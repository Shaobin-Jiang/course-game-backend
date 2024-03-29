from django.contrib import admin
from django.db import models
from django.utils.translation import gettext_lazy as _
from .models import *

class ClassListFilter(admin.SimpleListFilter):
    title = _('班级')
    parameter_name = 'custom_student_class'

    def lookups(self, request, model_admin):
        qs = model_admin.get_queryset(request)
        class_list = list(qs.values_list('user__student_class'))
        classes = list(map(lambda x: x[0], class_list))
        unique = list(set(classes))
        return list(map(lambda x: (x, _(x)), unique))

    def queryset(self, request, qs):
        if self.value() is None:
            return qs
        else:
            return qs.filter(user__student_class=self.value())

class GameAdmin(admin.ModelAdmin):
    search_fields = ('user__username', 'user__full_name')

    list_display = ['user', 'full_name', 'student_class', 'session', 'level', 'scene']

    list_display_links = ['user', 'session', 'level', 'scene']

    list_filter = ['user__student_class', 'user__headquarter', 'session', 'user__semester']

    ordering = ['user', 'session']

    list_per_page = 200

    def full_name(self, obj):
        return obj.user.full_name
    full_name.short_description = '姓名'

    def student_class(self, obj):
        return obj.user.student_class
    student_class.short_description = '班级'

    # Show the module on the admin index page
    def has_module_permission(self, request):
        has_permission = super().has_module_permission(request)
        return request.user.is_staff or has_permission

    def has_view_permission(self, request, obj=None):
        has_permission = super().has_view_permission(request, obj)
        return request.user.is_staff or has_permission

    def has_add_permission(self, request):
        has_permission = super().has_add_permission(request)
        return request.user.is_staff or has_permission

    def has_delete_permission(self, request, obj=None):
        has_permission = super().has_delete_permission(request, obj)
        return request.user.is_staff or has_permission

    def get_list_filter(self, request):
        if not request.user.is_superuser:
            return [ClassListFilter, 'session', 'user__semester']
        else:
            return self.list_filter

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        if request.user.is_superuser:
            return queryset
        else:
            return queryset.filter(user__is_superuser=False).filter(user__headquarter=request.user.headquarter)

@admin.register(ClassicStudies1)
class ClassicStudies1Admin(GameAdmin):
    pass

@admin.register(ClassicStudies2)
class ClassicStudies2Admin(GameAdmin):
    pass
