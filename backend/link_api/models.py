from django.db import models


class Link(models.Model):
    short_url = models.CharField(max_length=20, unique=True)
    url = models.CharField(max_length=2000)
    owner = models.ForeignKey('auth.User', related_name='links', on_delete=models.CASCADE)
    clicks = models.IntegerField(default=0)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.short_url
