# python3.5
# -*- coding: utf-8 -*-
import re
import hashlib
import hmac
import json
import random
import string
import time

if __name__ == '__main__':
    import db
else:
    from server import db

SECRECT = "Think Big, Start Small!".encode("utf-8")

def checkUserName(username):
    rule = r'[a-zA-Z_][a-zA-Z0-9_]{5,15}'
    return re.match(rule, username)

def checkPassword(password):
    rule = r'\S{6,26}'
    return re.match(rule, password)

def checkVerify(password, verify):
    return password == verify

def make_secure_val(val):
    return "{}|{}".format(val,
                          hmac.new(SECRECT, val.encode("utf-8")).hexdigest())

def check_secure_val(secure_val):
    val = secure_val.split("|")[0]
    return secure_val == make_secure_val(val)

def make_salt(length = 5):
    return "".join(random.choice(string.ascii_letters) for x in range(length))

def make_pw_hash(name, pw, salt=None):
    if not salt:
        salt = make_salt()
    h = hashlib.sha256((name + pw + salt).encode("utf-8")).hexdigest()
    return "{},{}".format(salt, h)

def valid_pw(name, password, h):
    salt = h.split(",")[0]
    return h == make_pw_hash(name, password, salt)

def expires(days):
    if days > 0:
        t = time.time() + days * 24 * 60 * 60
        return time.strftime("%A, %d-%b-%y %H:%M:%S GMT", time.localtime(t))
    else:
        return "/"

class Signup:
    def post(self, app, *args):
        have_error = False
        # get username, password, verify from the request body
        user = app.getRequestContext()
        user = json.loads(user)

        # validate username, password, verify
        if (not checkUserName(user["username"]) or
           not checkPassword(user["password"]) or
           not checkVerify(user["password"], user["verify"])):
           have_error = True

        if have_error:
            app.status = "406 Not Acceptable"
            app.header("Content-Type", "application/json; charset=UTF-8")
            return json.dumps("用户名或密码校验错误").encode("utf-8")
        else:
            user["password"] = make_pw_hash(user["username"], user["password"])
            user["verify"] = make_pw_hash(user["username"], user["verify"])
            new_user = db.user.createUser(user["username"],
                                          user["password"],
                                          user["verify"])

            app.header('Content-type', 'application/json; charset=UTF-8')
            if new_user:
                # 注册成功
                return json.dumps(user["username"]).encode("utf-8")
            else:
                # user already exists.
                app.status = "409 Conflict"
                app.header("Content-Type", "application/json; charset=UTF-8")
                return json.dumps("用户名已存在").encode("utf-8")

class Login:
    def get(self, app, *args):
        pass

    def post(self, app, *args):
        # get username, password from the request body
        user = app.getRequestContext()
        user = json.loads(user)

        # validate username, password
        user_query = db.user.userByName(user["username"])
        if not user_query:
            app.status = "406 Not Acceptable"
            app.header("Content-Type", "application/json; charset=UTF-8")
            return json.dumps("用户不存在").encode("utf-8")
        else:
            if valid_pw(user["username"],
                            user["password"],
                            user_query[2]):
                # set cookie
                expires_days = 60
                if not user["remember_me"]:
                    expires_days = 0
                app.header("Set-Cookie", "user_id={};Expires={}"
                            .format(user_query[0], expires(expires_days)))

                app.header("Content-Type", "application/json; charset=UTF-8")
                return json.dumps(user["username"]).encode("utf-8")
            else:
                app.status = "406 Not Acceptable"
                app.header("Content-Type", "application/json; charset=UTF-8")
                return json.dumps("密码不正确").encode("utf-8")

class Logout:
    def get(self, app, *args):
        # after logout, set login.user equal None
        login.user = None

        app.header("Set-Cookie", "user_id=;")
        return app.redirect('/myblog/signup')

register = Signup()
login = Login()
logout = Logout()

if __name__ == '__main__':
    print(make_secure_val("zhongxin"))
    print(check_secure_val("zhongxin|78b62f165cc329585eeea6e57ac885ff"))
    print(make_salt())
    print(make_pw_hash("zx", "zx1234"))
    print(valid_pw("zx", "zx1234", "wfYlW,7d7bd2335220dc5d70b9db6a683c0ec5881e287d7fca4f5c7c3ce1cd1462876d"))
