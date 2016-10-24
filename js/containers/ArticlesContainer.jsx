var React = require("react");
import { connect } from "react-redux";

var Articles = require("../components/Articles");

var ArticlesContainer = React.createClass({
  render: function() {
    return (
      <Articles
        posts={this.props.posts} />
    );
  }
});

const mapStateToProps = function(state) {
  return {
    posts: state.blogState
  }
};

export default connect(mapStateToProps)(ArticlesContainer);
