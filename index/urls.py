from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('classic-studies-1/', views.classic_studies_1),
    path('classic-studies-2/', views.classic_studies_2),
]
