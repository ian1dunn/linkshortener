from django.urls import path

from link_api import views

urlpatterns = [
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetails.as_view()),

    path('links/', views.LinkList.as_view()),
    path('links/<int:pk>/', views.LinkDetails.as_view()),
]