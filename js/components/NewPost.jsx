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
        border: "1px solid #eee",
        fontSize: "1.6em",
        boxSizing: "inherit",
        outline: "none"
      },
      textarea: {
        padding: "5px",
        width: "100%",
        minHeight: "15em",
        border: "1px solid #eee",
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
    return (
      // return value require only one root element
      <div style={style.container}>
        <form method="POST" action="/blog">
          <p style={style.p}>
            <label
              htmlFor="subject"
              style={style.label}>标题</label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="标题"
              style={style.input} />
          </p>
          <p style={style.p}>
            <label
              htmlFor="content"
              style={style.label}>主体</label>
            <textarea
              id="content"
              name="content"
              placeholder="主体"
              style={style.textarea}></textarea>
          </p>
          <p>
            <button
              className="normal"
              style={style.button}>发布</button>
          </p>
        </form>
      </div>
    );
  }
});

module.exports = NewPost;
