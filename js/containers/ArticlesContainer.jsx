var React = require("react");
import { connect } from "react-redux";

var Articles = require("../components/Articles");
import { fetchPosts } from "../actions/action";

var ArticlesContainer = React.createClass({
  componentDidMount: function() {
    this.props.fetchPosts();
  },

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

const mapDispatchToProps = function(dispatch) {
  return {
    fetchPosts: function() {
      return dispatch(fetchPosts());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);
