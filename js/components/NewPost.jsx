var React = require("react");

var NewPost = React.createClass({
  render: function() {
    var style = {
      container: {
        display: "flex",
        flexFlow: "column",
        flex: "1",
        width: "100%",
        maxWidth: "50em",
        margin: "2em auto",
      },
      p: {
        margin: "0 0 1em",
        boxSizing: "border-box"
      },
      label: {
        display: "none"
      },
      input: {
        padding: "0 5px",
        lineHeight: "1.8em",
        width: "100%",
        border: "1px solid #c9cabb",
        fontSize: "1.6em",
        boxSizing: "inherit",
        outline: "none"
      },
      textarea: {
        padding: "5px",
        width: "100%",
        minHeight: "15em",
        border: "1px solid #c9cabb",
        fontFamily: "inherit",
        fontSize: "1em",
        resize: "vertical",
        boxSizing: "inherit",
        outline: "none"
      },
      button: {
        float: "right"
      }
    }
    const {post, loading, error} = this.props.newPost;
    const {user} = this.props.verifyUserID;

    // check login status
    let login_tip = "";
    if (!user) {
      login_tip = "请先登陆..."
    }

    if (error) {
      return (
        // return value require only one root element
        <div style={style.container}>
          <span>文章发布失败：{error.message}</span>
        </div>
      );
    }

    return (
      // return value require only one root element
      <div style={style.container}>
        <form
          method="POST"
          action="/newPost"
	  style={{margin: "0 .5em"}}
          onSubmit={this.props.publishPost}>
          <p style={style.p}>
            <label
              htmlFor="subject"
              style={style.label}>标题</label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="标题"
              required
              style={style.input}
              onChange={this.props.handleSubjectChange} />
          </p>
          <p style={style.p}>
            <label
              htmlFor="content"
              style={style.label}>主体</label>
            <textarea
              id="content"
              name="content"
              placeholder="主体"
              required
              style={style.textarea}
              onChange={this.props.handleContentChange}></textarea>
          </p>
          <p>
            <span style={{color: "red"}}>{login_tip}</span>
            <button type="submit"
              className="normal"
              style={style.button}>发布</button>
          </p>
        </form>
      </div>
    );
  }
});

module.exports = NewPost;
