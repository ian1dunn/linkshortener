from django.contrib.auth.models import User
from rest_framework import serializers

from link_api.models import Link

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class LinkAPITokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        return token


class UserSerializer(serializers.ModelSerializer):
    links = serializers.PrimaryKeyRelatedField(many=True, queryset=Link.objects.all())

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'username', 'email', 'password', 'date_joined', 'last_login',
                  'links']


class LinkSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.id')
    timestamp = serializers.ReadOnlyField()

    class Meta:
        model = Link
        fields = ['id', 'short_url', 'url', 'owner', 'clicks', 'timestamp']  # TODO nest owner
