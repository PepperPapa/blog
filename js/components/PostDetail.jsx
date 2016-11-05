var React = require("react");
var markdown = require("markdown").markdown;

var PostDetail = React.createClass({
  render: function() {
    var style = {
      container: {
        display: "flex",
        flexFlow: "column",
        flex: "1",
        width: "100%",
        maxWidth: "65em",
        margin: "2em auto"
      },
      article: {
        padding: "1em 2em",
        border: "1px solid #eee",
        borderBottom: "1px solid #ddd",
        background: "white",
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
    const {post, loading, error} = this.props.activePost;

    if (loading) {
      return (
        <div style={style.container}>
          <article style={style.article}>
            <span>正在加载...</span>
          </article>
        </div>
      );
    } else if (error) {
      return (
        <div style={style.container}>
          <article style={style.article}>
            <span>加载出错：{error.message}</span>
          </article>
        </div>
      );
    } else if (post) {
      return (
        // return value require only one root element
        <div
          className="post-detail"
          style={style.container}>
          <article
            key={post.id}
            style={style.article}>
            <h1
              className="post-subject"
              style={style.head}>
              {post.subject}
            </h1>
            <p
              className="post-date"
              style={style.created}>
              Posted on {post.created} by PepperPapa
            </p>
            <p
              className="post-content"
              style={style.content}
              dangerouslySetInnerHTML={{__html: markdown.toHTML(post.content)}}>
            </p>
          </article>
        </div>
      );
    } // end of if (post)
  } // end of render
});

module.exports = PostDetail;
