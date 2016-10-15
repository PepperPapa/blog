var React = require("react");
var ReactDOM = require("react-dom");
/* follow the Browser History topic in link
"https://css-tricks.com/learning-react-router/" */
import { Router, Route, IndexRoute, browserHistory } from "react-router";

var BlogApp = require("./components/BlogApp");
var Main = require("./components/Main");
var NewPost = require("./components/NewPost");
var PostDetail = require("./components/PostDetail");
var Login = require("./components/Login");
var Signup = require("./components/Signup");


// you can't insert comments in first parameter for ReactDOM.render function
/*
 for hashHistory
 path="/" corresponed to url "http://192.168.177.129:8090/blog"
 path="/login" corresponed to url "http://192.168.177.129:8090/blog/#/login"
 path="/signup" corresponed to url "http://192.168.177.129:8090/blog/#/signup"
 path for "/*" don't make requests to server

 for browserHistory
 path="/" corresponed to url "http://192.168.177.129:8090/blog"
 path="/login" corresponed to url "http://192.168.177.129:8090/blog/login"
 path="/signup" corresponed to url "http://192.168.177.129:8090/blog/signup"
 path for "/*" server will response the same HTML file "index.html"
*/
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/blog" component={BlogApp}>
      <IndexRoute component={Main} />
      <Route path="newpost" component={NewPost} />
      <Route path=":postId" component={PostDetail} />
    </Route>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
  </Router>
  ),
  document.getElementById("root")
);
