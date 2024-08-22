from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from link_api import views
from link_api.views import LinkAPITokenObtainPairView

urlpatterns = [
    path('', views.get_routes),
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetails.as_view()),

    path('links/', views.LinkList.as_view()),
    path('links/<int:pk>/', views.LinkDetails.as_view()),
    path('token/', LinkAPITokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]