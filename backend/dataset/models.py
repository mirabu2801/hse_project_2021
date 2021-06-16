from django.db import models


class DatasetRow(models.Model):
    original = models.CharField(max_length=100000, blank=False)
    result = models.CharField(max_length=100000, blank=True)
