var React = require("react");
import { connect } from "react-redux";

import store from "../store/store";

var PostDetail = React.createClass({
  getPostBypostId: function() {
    let postId = this.props.params.postId;
    let posts = this.props.posts;
    console.log(posts);
    for (var index in posts) {
      if (postId == posts[index][0]) {
        return posts[index];
      }
    }
  },

  render: function() {
    var style = {
      container: {
        display: "flex",
        flexFlow: "column",
        flex: "1",
        width: "100%",
        maxWidth: "50em",
        margin: "2em auto"
      },
      article: {
        padding: "1em 2em",
        border: "1px solid #eee",
        borderBottom: "1px solid #ddd",
        background: "white"
      },
      head: {
        margin: ".5em 0",
        fontSize: "1.8em"
      },
      created: {
        fontFamily: "Georgia, serif",
        fontStyle: "italic",
        color: "#aeaeae"
      },
      content: {
        fontSize: "1.2em",
        fontFamily: "serif"
      }
    }
    let post = this.getPostBypostId();
    return (
      // return value require only one root element
      <div style={style.container}>
        <article
          key={post[0]}
          style={style.article}>
          <h1
            className="post-subject"
            style={style.head}>
            {post[1]}
          </h1>
          <p
            className="post-date"
            style={style.created}>
            Posted on {post[3]} by PepperPapa
          </p>
          <p
            className="post-content"
            style={style.content}>{post[2]}</p>
        </article>
      </div>
    );
  }
});

const mapStateToProps = function(state) {
  return {
    posts: state.blogState
  }
};

export default connect(mapStateToProps)(PostDetail);
