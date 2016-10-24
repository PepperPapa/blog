import React from "react";

import NewPost from "../components/NewPost";
import store from "../store/store";
import { addPost } from "../actions/action";

var NewPostContainer =  React.createClass({
  publishPost: function(event) {
    event.preventDefault();
    store.dispatch(
      addPost({
        id: 2,
        subject: "test subject",
        created: "2016.10.25",
        content: "test content"
      })
    );
  },

  render: function() {
    return (
      <NewPost publishPost={this.publishPost}/>
    );
  }
});

module.exports = NewPostContainer;
