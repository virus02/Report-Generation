from django.urls import path
from .views import ReportCreation, GetReport, ListReports

urlpatterns = [
    path('createreport/', ReportCreation.as_view(), name='create_report'),
    path('getreport/<int:pk>/', GetReport.as_view(), name='get_report'),
    path('listreports/', ListReports.as_view(), name='list-reports')
]
