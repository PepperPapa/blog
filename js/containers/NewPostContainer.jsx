import React from "react";
import { browserHistory } from "react-router";

import NewPost from "../components/NewPost";
import store from "../store/store";
import { addPost } from "../actions/action";
import $ from "../lib/XHR";

var NewPostContainer =  React.createClass({
  publishPost: function(event) {
    event.preventDefault();
    /* Ajax post request to server
      1. if response OK, jump to index page;
      2. is failed, jump to error page;
    */
    $.ajax({
      type: "post",
      url: "newpost.py",
      async: true,
      context: JSON.stringify({
        subject: "new subject",
        content: "new content"
      }),
      success: function(xhr) {
        console.log(xhr.responseText);
        store.dispatch(
          addPost(JSON.parse(xhr.responseText))
        );
      },
      error: function(xhr) {console.log(xhr.responseText);}
    });
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
