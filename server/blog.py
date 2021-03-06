# python3.5
# -*- coding: utf-8 -*-
import re
import time
from datetime import datetime, timedelta
import urllib.parse
import json
import logging

if __name__ == '__main__':
    import db
    from sign import login
else:
    from server import db
    from server.sign import login

# memory cache
BLOGS_CACHE = {}

def post_as_dict(post):
    return {
        "id": post[0],
        "subject": post[1],
        "content": post[2],
        "created": post[3],
        "last_modified": post[4]
    }

def age_get(key):
    r = BLOGS_CACHE.get(key)
    if r:
        val, save_time = r
        age = (datetime.utcnow() - save_time).total_seconds()
    else:
        val, age = None, 0
    return val, age

def age_set(key, val):
    save_time = datetime.utcnow()
    BLOGS_CACHE[key] = (val, save_time)

def age_str(age):
    s = "queried %s seconds ago."
    age = int(age)
    if age == 1:
        s.replace("seconds", "second")
    return s % age

def get_posts(update = False):
    # memory cache
    mc_key = "blogs"

    posts, age = age_get(mc_key)
    if update or posts == None:
        # test code for display db operation
        # logging.error("\ndb query\n")

        posts = db.blog.getAllPosts()
        age_set(mc_key, posts)
    return posts, age

class BlogFront:
    def get(self, app, *args):
        # app为application对象
        # wsgi server会以根目录寻找文件，而不是app.py所在的目录寻找
        if "flush" in app.environ["PATH_INFO"]:
            BLOGS_CACHE.clear()

        posts, age = get_posts()

        if posts:
            json_posts = json.dumps([post_as_dict(post) for post in posts])
            app.header('Content-type', 'application/json; charset=UF-8')
            return json_posts.encode("utf-8")
        else:
            return app.notfound()


class PostPage:
    def get(self, app, *args):
        # memory cache
        post_key = "POST_" + args[0]
        post, age = age_get(post_key)
        if not post:
            post = db.blog.getPostById(args[0])
            age_set(post_key, post)
            age = 0

        if post:
            json_post = json.dumps(post_as_dict(post))
            app.header('Content-type', 'application/json; charset=UF-8')
            return json_post.encode("utf-8")
        else:
            return app.notfound()

class NewPost:
    def __init__(self):
        self.id = db.blog.newpostID()

    def post(self, app, *args):
        postContext = app.getRequestContext()
        new_post_list = self.add_post(postContext)
        app.header('Content-type', 'application/json; charset=UTF-8')
        if db.blog.newpost(new_post_list):
            # update BLOGS_CACHE
            get_posts(update = True)
            return json.dumps(new_post_list).encode("utf-8")
        else:
            return app.serverError()

    def add_post(self, postContext):
        # [id, subject, content, created, last_modified]
        post = json.loads(postContext)
        new_post = []
        new_post.append(self.id)
        self.id += 1    # self.id始终记录最新的post id
        new_post.append(post["subject"])
        new_post.append(post["content"])
        day = time.strftime("%b %d, %Y", time.localtime())
        new_post.append(day)
        new_post.append(day)
        return new_post

blogFront = BlogFront()
newPost = NewPost()
postPage = PostPage()

if __name__ == '__main__':
    pass
