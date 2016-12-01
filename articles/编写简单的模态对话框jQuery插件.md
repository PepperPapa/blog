﻿> 一个简单的模态对话框插件的实现，实现比较简单，主要是练习jQuery插件的编写方法和插件结构形式

## 1. 如下为mymodal.js插件的源码

```
/*
 * 简单的模态对话框插件
 * 文件名: mymodal.js
 */

$(function($) {
  // 常量
  var NAME = "mymodal";
  //var CLASS_NAME = `.${NAME}`;
  //var DATA_TOGGLE = `[data-toggle=${NAME}]`;
  var SHOW = "show";
  var DATA_KEY = "zx.mymodal";

  // 构造函数，用于创建mymodal对象，对象共享的方法通过原型链继承
  function Mymodal(element) {
    this.element = $(element);
    this.close = this.element.find(".close");
  }

  Mymodal.prototype.show = function() {
    var $mymodal = this.element;
    var self = this;
    if ($mymodal.hasClass(NAME)) {
      if (!$mymodal.hasClass(SHOW)) {
        $mymodal.show();
        /* 如果直接添加类show（opacity会变为1），不会出现预期的过渡效果（opacity加入了过渡属性)
         * display会破坏过渡效果,这里通过setTimeout来规避此情况，delay为0即可
         */
        setTimeout(function(){
            $mymodal.addClass(SHOW);
          }, 0);
            

        var $close = this.close;
        $close.on("click", function(event) {
          self.handleDismiss();
        });
      }
    }
  };

  Mymodal.prototype.handleDismiss = function() {
    var $mymodal = this.element;
    $mymodal.removeClass(SHOW);
    /* 如果直接remove类show（opacity会变为1），不会出现预期的过渡效果（opacity加入了过渡属性)
     * display会破坏过渡效果,这里通过setTimeout来规避此情况，delay不能为0
     */
    setTimeout(function(){
      $mymodal.hide();
    }, 150);
  }

  Mymodal._jQueryInterface = function(config) {
    /* config选项： 空，close
     * jQuery对象调用该接口
     * 无参数--表示打开模态对话框
     * close--表示关闭模态对话框
     */
    return this.each(function(){
      var data = $(this).data(DATA_KEY);
      if (!data) {
        console.log("not here");
        data = new Mymodal(this);
        $(this).data(DATA_KEY, data);
      }

      if (config !== "close") {
        data.show();
      } else {
        data.handleDismiss();
      }
    });
  };

  // 监听click事件处理程序
  var $btn = $(DATA_TOGGLE);
  $btn.on("click", function(event) {
    event.preventDefault();

    // 提取target选择符,这里仅支持id选择符
    var id_mymodal = $(this).data("target");
    var data = $(this).data(DATA_KEY);
    if (!data) {
      data = new Mymodal(id_mymodal);
      $(id_mymodal).data(DATA_KEY, data);
    }
    data.show();
  });

  // jQuery接口
  $.fn[NAME] = Mymodal._jQueryInterface;
  $.fn[NAME].Constructor = Mymodal;
  $.fn[NAME].noConflict = function() {
    $.fn[NAME] = null;
    return Mymodal._jQueryInterface;
  };

  return Mymodal;
}(jQuery));
```

## 2. 使用该插件的示例
实现了打开两个模态对话框的简单示例，点击github项目链接[简单的模态对话框示例](https://github.com/PepperPapa/Bootstrap_v4_comments)，进入exercise\jQueryPlugin-demo目录，打开modal.html即可查看demo效果。
