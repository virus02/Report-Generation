from django.urls import path
from .views import ReportCreation, GetReport

urlpatterns = [
    path('createreport/', ReportCreation.as_view(), name='create_report'),
    path('getreport/<int:pk>/', GetReport.as_view(), name='get_report'),
]
