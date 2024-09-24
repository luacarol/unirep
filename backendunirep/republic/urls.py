from rest_framework.routers import DefaultRouter
from .views import RepublicSet

router = DefaultRouter()
router.register(r'republics', RepublicSet, basename='republic')

urlpatterns = router.urls
