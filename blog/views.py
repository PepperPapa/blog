from django.shortcuts import render

from .models import *

# Create your views here.
def index(request):
    lastest_notes_list = Notes.objects.order_by('-pub_date')[:5]
    context = {
        "lastest_notes_list": lastest_notes_list,
    }
    return render(request, "blog/index.html", context)
