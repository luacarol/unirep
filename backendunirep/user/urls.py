from rest_framework.routers import DefaultRouter
from .views import CustomUser

router = DefaultRouter()
router.register(r'users', CustomUser, basename='user')

urlpatterns = router.urls
