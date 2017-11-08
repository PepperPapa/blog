from django.contrib import admin

# Register your models here.
from .models import Notes, Tags

class TagsAdmin(admin.ModelAdmin):
    list_display = ('name', 'id')

class NotesAdmin(admin.ModelAdmin):
    fields = ['title', 'content', 'pub_date', 'like_num', 'tag_id']
    list_display = ('title', 'pub_date', 'tag_id', 'like_num', 'wasPublishedRecently')

admin.site.register(Notes, NotesAdmin)
admin.site.register(Tags, TagsAdmin)