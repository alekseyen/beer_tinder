from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import UserViewSet, UserInfoDetail, UserInfoDetailCreate

router = routers.DefaultRouter()
router.register('users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('user_info/<str:token>/', UserInfoDetail.as_view()),
    path('user_info/', UserInfoDetailCreate.as_view()),
]