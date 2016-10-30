import React from "react";
import { connect } from "react-redux";

import NewPost from "../components/NewPost";
import store from "../store/store";
import { createPost, addPost } from "../actions/action";
import $ from "../lib/XHR";

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

  publishPost: function(event) {
    /* Ajax post request to server
      1. if response OK, jump to index page;
      2. is failed, jump to error page;
    */
    this.props.createPost(JSON.stringify(this.state));
  },

  render: function() {
    return (
      <NewPost
        newPost={this.props.newPost}
        publishPost={this.publishPost}
        handleSubjectChange={this.handleSubjectChange}
        handleContentChange={this.handleContentChange} />
    );
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
