var React = require("react");
var ReactDOM = require("react-dom");
/* follow the Browser History topic in link
"https://css-tricks.com/learning-react-router/" */
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";

var BlogApp = require("./components/BlogApp");
var Main = require("./components/Main");
import NewPostContainer from "./containers/NewPostContainer";
import PostDetailContainer from "./containers/PostDetailContainer";
import LoginContainer from "./containers/LoginContainer";
import SignupContainer from "./containers/SignupContainer";
import store from "./store/store";

// scss style files
require("../scss/base.scss");
require("../scss/button.scss");
require("../scss/layout.scss");
require("../scss/markdown.scss");

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
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/blog" component={BlogApp}>
        <IndexRoute component={Main} />
        <Route path="newpost" component={NewPostContainer} />
        <Route path=":postId" component={PostDetailContainer} />
      </Route>
      <Route path="/login" component={LoginContainer} />
      <Route path="/signup" component={SignupContainer} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
