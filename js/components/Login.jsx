var React = require("react");

var Login = React.createClass({
  render: function() {
    var container_style = {
      position: "relative",
      minHeight: "100vh",
      backgroundImage: "url('../../images/bg.jpg')",
      backgroundSize: "cover",
    }
    var login_area_style = {
      position: "absolute",
      left: "50%",
      top: "30%",
      margin: "0 auto",
      width: "100%",
      maxWidth: "40em",
      background: "white",
    }
    return (
      // return value require only one root element
      <div style={container_style}>
        <div className="login-area" style={login_area_style}>
          login page
        </div>
      </div>
    );
  }
});

module.exports = Login;
