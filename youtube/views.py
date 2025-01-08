from django.shortcuts import render
from .models import videodetail as vd

# Create your views here.
def home(request):
    videodetails = vd.objects.all()
    return render(request, 'youtube/home.html',{'video':videodetails})