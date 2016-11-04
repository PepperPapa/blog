var React = require("react");

var Header = require("./Header");
var Footer = require("./Footer");

var BlogApp = React.createClass({
  render: function() {
    return (
      // return value require only one root element
      <div id="app-container">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
});

module.exports = BlogApp;
