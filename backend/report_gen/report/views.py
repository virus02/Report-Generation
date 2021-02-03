from django.db import reset_queries
from django.db.models import query
from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.settings import api_settings

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

    def patch(self, request, pk):
        report = self.get_object(pk)
        serializer = self.serializer_class(instance=report, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        data = self.get_object(pk)
        data.delete()
        return Response({'status': 'Item has been deleted'}, status=status.HTTP_200_OK)

class ListReports(ListAPIView):
    queryset = Report.objects
    serializer_class = ReportSerializer
    pagination_class = api_settings.DEFAULT_PAGINATION_CLASS

    def get(self, request, *args, **kwargs):
        serializer = self.serializer_class(self.queryset, many=True)
        page = self.paginate_queryset(serializer.data)
        return self.get_paginated_response(page)