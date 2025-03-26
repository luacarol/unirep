from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Republic
from .serializers import RepublicSerializer

class RepublicListView(APIView):
    def get(self, request):
        republics = Republic.objects.all()
        serializer = RepublicSerializer(republics, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = RepublicSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
