from django.urls import path, include
from .views import ViewSetsClass, gettingfromapiview, updateapifunction
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'Productviewset', ViewSetsClass, basename='app')

urlpatterns = [
    path('notification/', gettingfromapiview),
    path('notification/<int:pk>', updateapifunction, name='update'),
    path('notifyapiview/', gettingfromapiview),
    path('notifyapiview/<int:pk>', updateapifunction),
    path('productviewset/', include(router.urls)),  # Include router-generated URLs
]
