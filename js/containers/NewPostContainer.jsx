import React from "react";
import { browserHistory } from "react-router";

import NewPost from "../components/NewPost";
import store from "../store/store";
import { addPost } from "../actions/action";

var NewPostContainer =  React.createClass({
  publishPost: function(event) {
    event.preventDefault();
    /* Ajax post request to server
      1. if response OK, jump to index page;
      2. is failed, jump to error page;
    */
    store.dispatch(
      addPost({
        2: {
          subject: "test subject",
          created: "2016.10.25",
          content: "test content"
        }
      })
    );
    // jump to index page
    browserHistory.push("/blog");
  },

  render: function() {
    return (
      <NewPost publishPost={this.publishPost}/>
    );
  }
});

module.exports = NewPostContainer;
