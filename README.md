# 基于react-redux的个人博客项目
> 针对原有个人博客项目进行重构，使用react重建UI界面，前端框架基于redux进行构建，主要用来学习并实践react、redux技能。
> 个人博客在线链接 [PepperPapa'Blog](http://pepperpapa.xyz/blog)

## 云服务器的申请和登录：

1. 首先需要选择部署的平台，我选择的是华为弹性云服务器，首先进入[华为云官网](http://www.hwclouds.com/)进行用户注册，这个过程不再细说，都能搞定。 
2. 用户成功注册后，就可以申请弹性云服务器了，我选择的是最基础配置，服务器选择的linux64bit，详细配置见下图，你可以根据自己的情况进行选择，我选择的密码方式进行登录，要牢记自己的账户和密码。 
 ![云服务器配置截图1](http://per.kelantu.com/photos/1478689363-FlEqwuSXgzJvU_oO3OBJBnDO8o8e-orij0?e=3153600000&token=CT86R8zZYVXDyHWEWFoMX4pz0ksOzxtKCaC80si4:mYnxF1kYOyZ5Ily2v485Y2_Vvl0=)   
 
 ![云服务器配置截图2](http://per.kelantu.com/photos/1478690203-FrRtXTg1AhFczVBHhbNLF2iJ6slN-orij0?e=3153600000&token=CT86R8zZYVXDyHWEWFoMX4pz0ksOzxtKCaC80si4:mihKfml8oGATKYy59t6i3vWoiUI=)   
 
3. 点击立刻购买，会生成下图的配置及价格信息，确认后提交订单，一路按照指引支付即可完成弹性云服务器的申请。 

 ![确认配置提交订单](http://per.kelantu.com/photos/1478690332-FrYswN4DJIyNKyuMMHLKtHwCPhJY-orij0?e=3153600000&token=CT86R8zZYVXDyHWEWFoMX4pz0ksOzxtKCaC80si4:LdmIEg5C1g16zjm2F_YjA5YNdQw=)  
 
4. 支付成功后，等待一段时间就会出现如下的服务器信息了。 
  ![云服务器信息](http://per.kelantu.com/photos/1478690554-FmtcjygxXyBGelSSaxx7ZNUG1dqj-orij0?e=3153600000&token=CT86R8zZYVXDyHWEWFoMX4pz0ksOzxtKCaC80si4:exew60DyiDBVuvP-7na5yzYpp04=)  
  
5. step4中的云服务信息中，点击操作选项列中的远程登录就可以使用账户和密码登录到云服务器了（默认账户为root）,**如果一直没有出现登录提示，尝试按下回车键**。 
  ![远程登录云服务器](http://per.kelantu.com/photos/1478690887-FuYewS9mPhsyvbTa9iwK54KGQNCy-orij0?e=3153600000&token=CT86R8zZYVXDyHWEWFoMX4pz0ksOzxtKCaC80si4:32fzSJ5-3CowrhPphzyle7mTq2U=)  
  
6. 通过查看你申请的云服务器信息相信你也发现了你的云服务器只有私有ip地址192.168.1.4(以我的服务器为例，其他的会稍有不同，但是都是192.168打头的)，只有私有地址是没有办法让广大用户访问你的博客的，这时候还需要申请并绑定弹性IP，点击云服务器信息进入详细页面中的弹性ip选项卡，按照指引申请弹性ip，同样我也是申请的最低配置。 
 ![申请弹性ip01](http://per.kelantu.com/photos/1478691384-FiS80dsieVGsDa2PWwMcckJ5Y4zd-orij0?e=3153600000&token=CT86R8zZYVXDyHWEWFoMX4pz0ksOzxtKCaC80si4:ofQGUR_isSuEZDBDw8fv9g_cwXw=)  
 ![申请弹性ip02](http://per.kelantu.com/photos/1478691384-FsGW9Q4ldhnGuDUokW7wihr6kqiy-orij0?e=3153600000&token=CT86R8zZYVXDyHWEWFoMX4pz0ksOzxtKCaC80si4:KMXoxcb3UJ_GnpJBiJ04VYccoMg=)  
 
7. 弹性ip申请成功后，再次回到云服务器详细页面中的弹性ip选项卡中进行绑定，绑定后的云服务器信息如下，此时就可以看到公网IP啦。 
 ![绑定弹性ip后的云服务器信息](http://per.kelantu.com/photos/1478691650-FiYb8sSGmO6bAX3JXdOLUac4AfSi-orij0?e=3153600000&token=CT86R8zZYVXDyHWEWFoMX4pz0ksOzxtKCaC80si4:9EsYbPNZlLRjkjqlL7r7sOQnKPQ=) 
 
8. 我使用的是windows系统，需要下载putty，使用ssh协议登录，Host name即是你的云服务器的弹性ip地址( 公网ip)，port选择22，然后点击open。 
 ![putty ssh配置](http://per.kelantu.com/photos/1478691982-FsIxnXXY9cKLI86K6_Xj5CeuV4jo-orij0?e=3153600000&token=CT86R8zZYVXDyHWEWFoMX4pz0ksOzxtKCaC80si4:D1ND3qymFN3M0tyB2WNP8KUzH8M=)  
 
9. 接着使用root账号和你申请使使用的密码就可以登录云服务器了，登录成功的界面如下。 
 ![云服务器登录成功界面](http://per.kelantu.com/photos/1478691982-FkG4fhOW6EvVINGWX7kZAtspGNKI-orij0?e=3153600000&token=CT86R8zZYVXDyHWEWFoMX4pz0ksOzxtKCaC80si4:LqkXZqQEWyf8MQGsZ1y5k0OBRxA=)  

## 安装依赖及启动上线
> 部署服务器：华为弹性云服务器
> 系统环境：Ubuntu 14.04.5 LTS (GNU/Linux 3.13.0-24-generic x86_64)
> TIP: 由于对shell脚本不太熟悉，目前网站部署过程过于复杂，本文只是详细记录本人博客的部署过程，后续尝试实现一键式部署上线

1. 更新软件源
初次使用需要更新软件源列表，否则可能后续步骤的安装会报错
```
$ apt-get update 
```

2. 安装依赖软件
安装git，版本管理必备工具，推荐安装（可选）
```
$ apt-get install git 
```
安装emacs（可选）
```
$ apt-get install emacs24 
```
python3默认已安装至服务器，默认版本为3.4.3，安装python3包管理工具pip
```$ apt-get install python3-pip 
```

安装uwsgi，用于server端动态数据请求
```$ apt-get install uwsgi 
$ apt-get install uwsgi-python3 
$ apt-get install uwsgi-plugin-python3 
```
安装nginx服务器，用于server端静态文件请求
```$ apt-get install nginx 
```
安装nodejs
> 默认已经安装了node，但是可能版本过低，而且软件源列表也没有更新更高版本的node（执行$ apt-get install node会返回已安装的提示），会导致终端下无法识别node命令，只能识别nodejs命令，建议这种情况下使用Node.js 源码安装。

> 以下部分介绍在Ubuntu Linux下安装 Node.js参考链接 。 在 Github 上获取 Node.js 源码：

```
$ sudo git clone https://github.com/nodejs/node.git 
修改目录权限：
$ sudo chmod -R 755 node 
使用 ./configure 创建编译文件，并按照:
$ cd node 
$ sudo ./configure 
$ sudo make 
$ sudo make install 
查看 node 版本:
$ node --version 
v8.00-pre 
```

安装npm
```
$ apt-get install npm 
```

安装cnpm，解决npm国内下载慢的问题
```
$ npm install -g cnpm --registry=https://registry.npm.taobao.org 
```

安装ruby和sass（使用sass必须先安装ruby）：
> sass默认源被墙，需更改源，否则执行gem install sass没有任何反应

```
$ apt-get install ruby  
$ gem source --add https://gems.ruby-china.org/
$ gem install sass 
$ sass -v 
```

3. 安装项目运行所需的npm包
cd到project/blog目录下，执行：
```
$ cnpm install 
$ cnpm install webpack -g
```
*全局安装webpack，全局安装后才可以在终端使用webpack命令*

4. clone项目代码并启动上线
cd至/etc/nginx目录，更新nginx.conf文件

```
user www-data; 更新为 user root root; 
不更改的话，nginx会以www-data用户运行，该用户无权限访问blog/目录中文件。
$ ps aux -P | grep nginx --命令可以查看nginx的进程信息
```

cd至项目根目录/blog, 更新nginx-blog.conf文件
```
listen端口号更改为80（默认http端口号） root路径更新为华为云服务器blog根目录
```

更新uwsgi-blog.ini文件
```
更新wsgi-file路径为云服务器项目目录下的app.py的路径
```

cd至/etc/nginx/sites-enabled，执行
```
$ rm default --删除默认链接文件 $ ln -s ~/projects/blog/nginx-blog.conf --创建新链接，链接至blog的配置文件
```

重启nginx服务
```$ service nginx reload
```

启动uwsgi服务器
```
$ cd ~/projects/blog
$ uwsgi --ini uwsgi-blog.ini
```

挂接域名

浏览器打开http://pepperpapa.xyz/blog，站点就正式上线运行啦。

**欢迎访问我的博客!**

