import React from "react";
import { browserHistory } from "react-router";
import { connect } from "react-redux";

var marked = require("marked");

import NewPost from "../components/NewPost";
import { createPost } from "../actions/action";

var NewPostContainer =  React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  
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
    this.setState({content: marked(event.target.value)});
  },

  componentWillReceiveProps: function(nextProps) {
    if(nextProps.newPost.post && !nextProps.newPost.error) {
      // browserHistory.push('/blog');
      // another solution for navigating
      this.context.router.push('/blog');
    }
  },

  publishPost: function(event) {
    event.preventDefault();
    /* Ajax post request to server
      1. if response OK, jump to index page;
      2. is failed, jump to error page;
    */
    // must login first
    if (this.props.verifyUserID.user) {
      this.props.createPost(JSON.stringify(this.state));
    }
  },

  render: function() {
    var page = <NewPost
      newPost={this.props.newPost}
      verifyUserID={this.props.verifyUserID}
      publishPost={this.publishPost}
      handleSubjectChange={this.handleSubjectChange}
      handleContentChange={this.handleContentChange}
      content={this.state.content} />;

    return page;
  }
});

function mapStateToProps(state) {
  return {
    newPost: state.newPost,
    verifyUserID: state.verifyUserID
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
