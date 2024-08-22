from django.contrib.auth.models import User
from rest_framework import viewsets, generics, permissions
from rest_framework.decorators import api_view
from rest_framework_simplejwt.views import TokenObtainPairView

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
