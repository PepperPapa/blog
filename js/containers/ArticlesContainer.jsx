var React = require("react");
import { connect } from "react-redux";

var Articles = require("../components/Articles");

var ArticlesContainer = React.createClass({
  render: function() {
    return (
      <Articles
        postsList={this.props.postsList} />
    );
  }
});

const mapStateToProps = function(state) {
  return {
    postsList: state.postsList
  }
};

export default connect(mapStateToProps)(ArticlesContainer);
