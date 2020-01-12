from django.db import models


class UserInfo(models.Model):
    token = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    sex = models.BooleanField()
    description = models.TextField()

    def __str__(self):
        return self.name
