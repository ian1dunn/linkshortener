from django.contrib.auth.models import User
from rest_framework import serializers

from link_api.models import Link


class UserSerializer(serializers.ModelSerializer):
    links = serializers.PrimaryKeyRelatedField(many=True, queryset=Link.objects.all())

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'username', 'email', 'date_joined', 'last_login', 'links']


class LinkSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.id')
    timestamp = serializers.ReadOnlyField()

    class Meta:
        model = Link
        fields = ['id', 'short_url', 'url', 'owner', 'clicks', 'timestamp']
