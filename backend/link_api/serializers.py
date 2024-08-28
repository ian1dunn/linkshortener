from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from link_api.models import Link


class UserSerializer(serializers.ModelSerializer):
    links = serializers.PrimaryKeyRelatedField(many=True, queryset=Link.objects.all(), default=Link.objects.none())
    email = serializers.EmailField(validators=[UniqueValidator(queryset=User.objects.all())])

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'username', 'email', 'password', 'date_joined', 'last_login', 'links'] # TODO make email unique
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = super().create(validated_data)
        user.set_password(password)
        user.save()
        return user


class LinkSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.id')
    timestamp = serializers.ReadOnlyField()

    class Meta:
        model = Link
        fields = ['id', 'short_url', 'url', 'owner', 'clicks', 'timestamp']
