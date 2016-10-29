var React = require("react");
import { connect } from "react-redux";

var PostDetail = require("../components/PostDetail");
import { fetchPost } from "../actions/action";

var PostDetailContainer =  React.createClass({
  componentDidMount: function() {
    this.props.fetchPost(this.props.params.postId);
  },

  render: function() {
    return (
      <PostDetail activePost={this.props.activePost} />
    );
  }
});

function mapStateToProps(state) {
  return {
    activePost: state.activePost
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPost: function(postId) {
      return dispatch(fetchPost(postId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer);
