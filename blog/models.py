from django.db import models


# 表tags（标签）：
# * id
# * name --标签名称
class Tags(models.Model):
    # TIP: Tags定义要在Notes之前,否则包Tags未定义
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

# Create your models here.
# 表notes（文章）：
# * id
# * title --标题
# * pub_date --时间日期
# * content  --文章内容
# * tag_id --标签
# * like_num --点赞数
class Notes(models.Model):
    title = models.CharField(max_length=200)
    pub_date = models.DateTimeField("发表时间")
    content = models.CharField(max_length=50000)
    tag_id = models.ForeignKey(Tags, on_delete=models.CASCADE)
    like_num = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.name


