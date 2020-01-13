from django.shortcuts import render
from rest_framework import viewsets, generics
from django.contrib.auth.models import User
from .serializers import UserSerializer, UserInfoSerializer
from .models import UserInfo


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserInfoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserInfo.objects.all()
    lookup_field = 'token'
    serializer_class = UserInfoSerializer

class UserInfoDetailCreate(generics.CreateAPIView):
    queryset = UserInfo.objects.all()
    lookup_field = 'token'
    serializer_class = UserInfoSerializer
