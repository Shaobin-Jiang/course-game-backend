from django.urls import path
from . import views

urlpatterns = [
    path('utils-add-users/', views.add_users_view),
]
