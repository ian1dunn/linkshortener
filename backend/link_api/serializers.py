from rest_framework import serializers

from link_api.models import Link, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'username', 'email', 'password', 'timestamp']


class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = ['id', 'short_url', 'url', 'owner', 'clicks', 'timestamp']  # TODO nest owner
