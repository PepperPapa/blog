from django.shortcuts import render

from .models import *

# Create your views here.
"""
/blog  博客首页
"""
def index(request):
    lastest_post_list = Notes.objects.order_by('-pub_date')[:5]
    context = {
        "lastest_post_list": lastest_post_list,
        "all_tag_list": getAllTags()
    }
    return render(request, "blog/index.html", context)


"""
获取当前创建的所有标签
"""
def getAllTags():
    tag_list = Tags.objects.order_by('name')
    return [tag.name for tag in tag_list] 