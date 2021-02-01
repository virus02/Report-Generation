from django.db import models

# Create your models here.
class Report(models.Model):
    STATUS_CHOICES = (
        (1, 'Active'),
        (0, 'Inactive')
    )
    name = models.CharField(max_length=100, null=True, blank=True)
    subject = models.CharField(max_length=100, null=True, blank=True)
    department = models.CharField(max_length=100, null=True, blank=True)
    status = models.SmallIntegerField(choices=STATUS_CHOICES, default=1)

    def __str__(self):
        return self.name