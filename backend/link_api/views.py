from django.contrib.auth.models import User
from django.views import View
from rest_framework import generics, permissions
from rest_framework.decorators import api_view

from link_api.models import Link
from link_api.permissions import IsAuthorOrReadOnly
from link_api.serializers import UserSerializer, LinkSerializer

from django.http import JsonResponse


@api_view(['GET'])
def get_routes(request):
    routes = [
        '/api/token',
        '/api/token/refresh'
    ]
    return JsonResponse(routes, safe=False)


class UserLinkList(generics.ListAPIView):
    serializer_class = LinkSerializer

    def get_queryset(self):
        queryset = Link.objects.filter(owner_id=self.kwargs['pk'])
        return queryset


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetails(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class LinkList(generics.ListCreateAPIView):
    queryset = Link.objects.all()
    serializer_class = LinkSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsAuthorOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class LinkDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Link.objects.all()
    serializer_class = LinkSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsAuthorOrReadOnly]
