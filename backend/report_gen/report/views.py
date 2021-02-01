from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.permissions import AllowAny

from .models import Report
from .serializers import ReportSerializer

class ReportCreation(APIView):
    serializer_class = ReportSerializer
    permission_classes = [AllowAny,]

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GetReport(APIView):
    serializer_class = ReportSerializer
    permission_classes = [AllowAny,]

    def get_object(self, pk):
        try:
            return Report.objects.get(id=pk)
        except:
            return Http404

    def get(self, request, pk):
        data = self.get_object(pk)
        serializer = self.serializer_class(data)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        data = self.get_object(pk)
        serializer = self.serializer_class(data, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        data = self.get_object(pk)
        data.delete()
        return Response({'status': 'Item has been deleted'}, status=status.HTTP_200_OK)