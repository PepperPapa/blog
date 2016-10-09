# python3.5
# -*- coding: utf-8 -*-
import re

# 使用uwsgi server，必须使用application作为方法名或类名
# every request will restart application
class application:
    urls = (
        ("/blog/?", "hello"),
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
        # path format: host/blog/*
        path = self.environ['PATH_INFO']
        method = self.environ['REQUEST_METHOD']

        for pattern, name in self.urls:
            m = re.match('^' + pattern + '$', path)
            if m:
                # pass the matched groups as arguments to the function
                args = m.groups()
                handler = name
                funcname = method.lower()
                return self.hello()
                if hasattr(handler, funcname):
                    func = getattr(self, funcname)
                    return func(self, *args)
        return self.notfound()

    def header(self, name, value):
        self._headers.append((name, value))

    def hello(self):
        # the file path is the as the path of file "uwsgi-blog.ini"
        f = open("index.html")
        content = f.read()
        f.close()
        self.status = "200 OK"
        self.header('Content-type', 'text/html')
        return content.encode('utf-8')

    def notfound(self):
        self.status = "404 Not Found"
        self.header('Content-type', 'text/html')
        return "404 Not Found\n".encode('utf-8')
