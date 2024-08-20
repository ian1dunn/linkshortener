from django.db import models


class Link(models.Model):
    short_url = models.CharField(max_length=20)
    url = models.CharField(max_length=2000)
    clicks = models.IntegerField(default=0)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.short_url


class User(models.Model):
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)
    username = models.CharField(max_length=60)
    email = models.CharField(max_length=60)
    password = models.CharField(max_length=60)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.username}<{self.email}>'
