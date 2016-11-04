/*
simple Ajax function
*/

function createXHR() {
  if (typeof XMLHttpRequest != "undefined") {
    return new XMLHttpRequest();
  }
}

var xhr = createXHR();

var $ = {
  ajax: function() {
    /*
     arguments[0] format:
     {
      type: "get",
      url: "getposts.py",
      async: true,
      context: "xxx",
      success: callback,
      error: callback
      }
    */
    let para = arguments[0];
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if ((xhr.status >= 200 && xhr.status < 300) ||
              xhr.status == 304) {
          para.success(xhr);
        } else {
          para.error(xhr)
        }
      }
    }

    xhr.open(para.type, para.url, para.async);
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.send(para.context);
  }
};

export default $;
