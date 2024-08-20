from rest_framework import viewsets

from link_api.models import User, Link
from link_api.serializers import UserSerializer, LinkSerializer

# TODO allow users to update a link with POST
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class LinkViewSet(viewsets.ModelViewSet):
    queryset = Link.objects.all()
    serializer_class = LinkSerializer
