# 基于react-redux的个人博客项目
> 针对原有个人博客项目进行重构，使用react重建UI界面，前端框架基于redux进行构建，主要用来学习并实践react、redux技能。
> 个人博客在线链接 [PepperPapa'Blog](http://pepperpapa.xyz/blog)

## 云服务器的申请和登录：

1. 首先需要选择部署的平台，我选择的是华为弹性云服务器，首先进入[华为云官网](http://www.hwclouds.com/)进行用户注册，这个过程不再细说，都能搞定。 
2. 用户成功注册后，就可以申请弹性云服务器了，我选择的是最基础配置，服务器选择的linux64bit，详细配置见下图，你可以根据自己的情况进行选择，我选择的密码方式进行登录，要牢记自己的账户和密码。 
 ![云服务器配置截图1](http://per.kelantu.com/photos/1478689363-FlEqwuSXgzJvU_oO3OBJBnDO8o8e-orij0?e=3153600000&token=CT86R8zZYVXDyHWEWFoMX4pz0ksOzxtKCaC80si4:mYnxF1kYOyZ5Ily2v485Y2_Vvl0=)   
 
 ![云服务器配置截图2](http://per.kelantu.com/photos/1478690203-FrRtXTg1AhFczVBHhbNLF2iJ6slN-orij0?e=3153600000&token=CT86R8zZYVXDyHWEWFoMX4pz0ksOzxtKCaC80si4:mihKfml8oGATKYy59t6i3vWoiUI=)   
 
3.点击立刻购买，会生成下图的配置及价格信息，确认后提交订单，一路按照指引支付即可完成弹性云服务器的申请。 

 ![确认配置提交订单](http://per.kelantu.com/photos/1478690332-FrYswN4DJIyNKyuMMHLKtHwCPhJY-orij0?e=3153600000&token=CT86R8zZYVXDyHWEWFoMX4pz0ksOzxtKCaC80si4:LdmIEg5C1g16zjm2F_YjA5YNdQw=)  
 
4.支付成功后，等待一段时间就会出现如下的服务器信息了。 
  ![云服务器信息](http://per.kelantu.com/photos/1478690554-FmtcjygxXyBGelSSaxx7ZNUG1dqj-orij0?e=3153600000&token=CT86R8zZYVXDyHWEWFoMX4pz0ksOzxtKCaC80si4:exew60DyiDBVuvP-7na5yzYpp04=)  
  
5.step4中的云服务信息中，点击操作选项列中的远程登录就可以使用账户和密码登录到云服务器了（默认账户为root）,**如果一直没有出现登录提示，尝试按下回车键**。 
  ![远程登录云服务器](http://per.kelantu.com/photos/1478690887-FuYewS9mPhsyvbTa9iwK54KGQNCy-orij0?e=3153600000&token=CT86R8zZYVXDyHWEWFoMX4pz0ksOzxtKCaC80si4:32fzSJ5-3CowrhPphzyle7mTq2U=)  
  
6.通过查看你申请的云服务器信息相信你也发现了你的云服务器只有私有ip地址192.168.1.4(以我的服务器为例，其他的会稍有不同，但是都是192.168打头的)，只有私有地址是没有办法让广大用户访问你的博客的，这时候还需要申请并绑定弹性IP，点击云服务器信息进入详细页面中的弹性ip选项卡，按照指引申请弹性ip，同样我也是申请的最低配置。 
 ![申请弹性ip01](http://per.kelantu.com/photos/1478691384-FiS80dsieVGsDa2PWwMcckJ5Y4zd-orij0?e=3153600000&token=CT86R8zZYVXDyHWEWFoMX4pz0ksOzxtKCaC80si4:ofQGUR_isSuEZDBDw8fv9g_cwXw=)  
 ![申请弹性ip02](http://per.kelantu.com/photos/1478691384-FsGW9Q4ldhnGuDUokW7wihr6kqiy-orij0?e=3153600000&token=CT86R8zZYVXDyHWEWFoMX4pz0ksOzxtKCaC80si4:KMXoxcb3UJ_GnpJBiJ04VYccoMg=)  
 
7.弹性ip申请成功后，再次回到云服务器详细页面中的弹性ip选项卡中进行绑定，绑定后的云服务器信息如下，此时就可以看到公网IP啦。 
 ![绑定弹性ip后的云服务器信息](http://per.kelantu.com/photos/1478691650-FiYb8sSGmO6bAX3JXdOLUac4AfSi-orij0?e=3153600000&token=CT86R8zZYVXDyHWEWFoMX4pz0ksOzxtKCaC80si4:9EsYbPNZlLRjkjqlL7r7sOQnKPQ=) 
 
8.我使用的是windows系统，需要下载putty，使用ssh协议登录，Host name即是你的云服务器的弹性ip地址( 公网ip)，port选择22，然后点击open。 
 ![putty ssh配置](http://per.kelantu.com/photos/1478691982-FsIxnXXY9cKLI86K6_Xj5CeuV4jo-orij0?e=3153600000&token=CT86R8zZYVXDyHWEWFoMX4pz0ksOzxtKCaC80si4:D1ND3qymFN3M0tyB2WNP8KUzH8M=)  
 
9.接着使用root账号和你申请使使用的密码就可以登录云服务器了，登录成功的界面如下。 
 ![云服务器登录成功界面](http://per.kelantu.com/photos/1478691982-FkG4fhOW6EvVINGWX7kZAtspGNKI-orij0?e=3153600000&token=CT86R8zZYVXDyHWEWFoMX4pz0ksOzxtKCaC80si4:LqkXZqQEWyf8MQGsZ1y5k0OBRxA=)  
 
**接下来就是正式开始博客站点的部署工作啦，待续...**
