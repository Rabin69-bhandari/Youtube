from django.db import models

# Create your models here.
class videodetail(models.Model):
    id = models.AutoField(primary_key=True)
    channelname = models.CharField(max_length=50)
    description = models .CharField(max_length=100)
    like = models.CharField(max_length=10)
    time = models.CharField(max_length=10)
    video = models.FileField(upload_to='videos/')
    thumbnail = models.ImageField(upload_to='images/')
    channelphoto = models.ImageField(upload_to='image/')

    def __str__(self):
        return self.channelname