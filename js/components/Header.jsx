var React = require("react");

var Header = React.createClass({
  render: function() {
    return (
      <header style={{backgroundColor: "darkcyan"}}>
        <img src="/blog/images/logo.png" style={{width: "120px", height: "120px"}} />
        <h1>Pepperpapa's Blog</h1>
      </header>
    );
  }
});

module.exports = Header;
