var React = require("react");
var ReactDOM = require("react-dom");
import {Router, Route, hashHistory} from "react-router";

var BlogApp = require("./components/BlogApp");

ReactDOM.render((
  <Router>
    <Route path="/" component={BlogApp} />
  </Router>
  ),
  document.getElementById("root")
);
