import React from "react";

import NewPost from "../components/NewPost";
import store from "../store/store";

var NewPostContainer =  React.createClass({
  publishPost: function() {

  },

  render: function() {
    return (
      <NewPost publishPost={this.publishPost}/>
    );
  }
});

module.exports = NewPostContainer;
