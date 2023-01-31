from django.contrib import admin
from django.db import models
from django.utils.translation import gettext_lazy as _
from .models import *

class GameAdmin(admin.ModelAdmin):
    list_display = ['user', 'session', 'level', 'scene']

    list_display_links = ['user', 'session', 'level', 'scene']

    ordering = ['user', 'session']

    list_per_page = 200

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

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        if request.user.is_superuser:
            return queryset
        else:
            return queryset.filter(user__is_superuser=False)

@admin.register(ClassicStudies1)
class ClassicStudies1Admin(GameAdmin):
    pass

@admin.register(ClassicStudies2)
class ClassicStudies2Admin(GameAdmin):
    pass
