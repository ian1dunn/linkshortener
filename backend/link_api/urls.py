from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView

from link_api import views

urlpatterns = [
    path('', views.get_routes),
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetails.as_view()),
    path('users/<int:pk>/links/', views.UserLinkList.as_view()),
    path('links/', views.LinkList.as_view()),
    path('links/<int:pk>/', views.LinkDetails.as_view()),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]