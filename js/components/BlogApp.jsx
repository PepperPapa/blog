var React = require("react");

import HeaderContainer from "../containers/HeaderContainer";
var Footer = require("./Footer");

var BlogApp = React.createClass({
  render: function() {
    return (
      // return value require only one root element
      <div id="app-container">
        <HeaderContainer />
        {this.props.children}
        <Footer />
      </div>
    );
  }
});

module.exports = BlogApp;
