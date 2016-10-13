var React = require("react");

var Header = require("./Header");
var Main = require("./Main");
var Footer = require("./Footer");

var BlogApp = React.createClass({
  render: function() {
    return (
      // return value require only one root element
      <div id="app-container">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
});

module.exports = BlogApp;
