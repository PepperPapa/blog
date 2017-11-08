from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'list/(.*)?$', views.list, name="list"),
    url(r'(\d+)$', views.detail, name="detail"),
]