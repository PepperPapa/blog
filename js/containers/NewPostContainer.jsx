import React from "react";
import { browserHistory } from "react-router";
import { connect } from "react-redux";

import NewPost from "../components/NewPost";
import { createPost } from "../actions/action";

var NewPostContainer =  React.createClass({
  getInitialState: function() {
    return {
      subject: "",
      content: ""
    };
  },

  handleSubjectChange: function(event) {
    this.setState({subject: event.target.value});
  },

  handleContentChange: function(event) {
    this.setState({content: event.target.value});
  },

  componentWillReceiveProps: function(nextProps) {
    if(nextProps.newPost.post && !nextProps.newPost.error) {
      browserHistory.push('/blog');
    }
  },

  publishPost: function(event) {
    event.preventDefault();
    /* Ajax post request to server
      1. if response OK, jump to index page;
      2. is failed, jump to error page;
    */
    this.props.createPost(JSON.stringify(this.state));
  },

  render: function() {
    var page = <NewPost
      newPost={this.props.newPost}
      publishPost={this.publishPost}
      handleSubjectChange={this.handleSubjectChange}
      handleContentChange={this.handleContentChange} />;

    return page;
  }
});

function mapStateToProps(state) {
  return {
    newPost: state.newPost
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createPost: function(props) {
      return dispatch(createPost(props))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPostContainer);
