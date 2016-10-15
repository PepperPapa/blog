var React = require("react");

var NewPost = React.createClass({
  render: function() {
    var style = {
      display: "flex",
      flex: "1"
    }
    return (
      // return value require only one root element
      <div style={style}>
        newpost page
      </div>
    );
  }
});

module.exports = NewPost;
