# python3.5
# -*- coding: utf-8 -*-
import re
import json

if __name__ == '__main__':
    from blog import blogFront, newPost, postPage
    from sign import signup, login, logout
else:
    from server.blog import blogFront, newPost, postPage
    from server.sign import register, login, logout
# 使用uwsgi server，必须使用application作为方法名或类名
class application:
    urls = (
        # TODO: zx will remove
        ("/(:?\.json$)?/?(\?.*)?$", blogFront),
        ("/flush/?", blogFront),
        ("/newpost/?$", newPost),
        ("/signup/?(\?.*)?$", register),
        ("/login/?(\?.*)?$", login),
        ("/logout/?$", logout),
        ("/(\d+)(:?\.json)?$", postPage),

        # api
        ("/blog/posts.py", blogFront),
        ("/blog/(\d+).py", postPage),
        ("/blog/newpost.py", newPost),
        ("/signup.py", register),
        ("/login.py", login),
    )

    def __init__(self, environ, start_response):
        self.environ = environ
        self.start_response = start_response
        self.status = "200 OK"
        self._headers = []
        if self.environ["PATH_INFO"].endswith(".json"):
            self.format = "json"
        else:
            self.format = "html"

    def __iter__(self):
        result = self.delegate()
        self.start_response(self.status, self._headers)

        # 将返回值result(字符串或字符串列表)转换为迭代对象
        if isinstance(result, bytes):
            return iter([result])
        else:
            return iter(result)

    def delegate(self):
        path = self.environ['PATH_INFO']
        method = self.environ['REQUEST_METHOD']

        for pattern, name in self.urls:
            m = re.match('^' + pattern + '$', path)
            if m:
                # pass the matched groups as arguments to the function
                args = m.groups()
                handler = name
                funcname = method.lower()
                if hasattr(handler, funcname):
                    func = getattr(handler, funcname)
                    return func(self, *args)
        return self.notfound()

    def header(self, name, value):
        self._headers.append((name, value))

    def notfound(self):
        self.status = "404 Not Found"
        self.header('Content-type', 'application/json')
        return "404 Not Found".encode('utf-8')

    def serverError(self):
        self.status = "500 Internal Server Error"
        self.header('Content-type', 'application/json')
        return "500 Internal Server Error".encode('utf-8')

    def redirect(self, path):
        self.status = "301 OK"
        self.header('Location', path)
        return "".encode("utf-8")

    def getRequestContext(self):
        content_length = int(self.environ['CONTENT_LENGTH'])
        content = self.environ['wsgi.input'].read(content_length).decode('utf-8')
        return content

    def readCookie(self):
        if "HTTP_COOKIE" in self.environ:
            cookie = self.environ["HTTP_COOKIE"].split(";")
            cookie = dict([item.split("=") for item in cookie])
            return cookie
