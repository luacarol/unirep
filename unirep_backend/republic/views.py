from rest_framework import viewsets
from .models import Republic
from .serializers import RepublicSerializer

class RepublicViewSet(viewsets.ModelViewSet):
    queryset = Republic.objects.all()
    serializer_class = RepublicSerializer