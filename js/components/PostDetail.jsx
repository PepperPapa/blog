var React = require("react");

var PostDetail = React.createClass({
  render: function() {
    var style = {
      display: "flex",
      flex: "1"
    }
    return (
      // return value require only one root element
      <div style={style}>
        post detail page
      </div>
    );
  }
});

module.exports = PostDetail;
