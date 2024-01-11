from django.db import models

class ProductModel(models.Model):
    name = models.CharField(max_length=30)
    amount = models.IntegerField()
    email = models.CharField(max_length=30)
    date_in = models.CharField(max_length=30)
    date_out = models.CharField(max_length=30)
    interest = models.IntegerField()
    requested = models.BooleanField()

    def __str__(self):
        return self.email

