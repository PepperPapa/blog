from django.shortcuts import render, get_object_or_404

from .models import *

# helper function
"""
获取当前创建的所有标签
"""
def getAllTags():
    tag_list = Tags.objects.order_by('name')
    return [tag.name for tag in tag_list] 

# views pages
"""
/blog  博客首页
"""
def index(request):
    lastest_post_list = Notes.objects.order_by('-pub_date')[:5]
    context = {
        "lastest_post_list": lastest_post_list,
        "all_tag_list": getAllTags(),
        "index_page_active": "active",
    }
    return render(request, "blog/index.html", context)

"""
/blog/lists  博客文章列表页
"""
def list(request, tag_name):
    if tag_name:
        tag_id = Tags.objects.get(name=tag_name).id
        post_title_list = Notes.objects.all().filter(tag_id=tag_id).order_by('-pub_date')
    else:
        post_title_list = Notes.objects.order_by('-pub_date')
    
    context = {
        "post_title_list": post_title_list,
        "all_tag_list": getAllTags(),
        "list_page_active": "active",
    }
    return render(request, "blog/list.html", context)

"""
/blog/\d+  显示单个文章页面
"""
def detail(request, post_id):
    post = get_object_or_404(Notes, pk=post_id)
    context = {
        "post_detail": post,
        "all_tag_list": getAllTags(),
        "detail_page_active": "active",
    }
    return render(request, "blog/detail.html", context)