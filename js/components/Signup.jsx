var React = require("react");
import { Link } from "react-router";

var Signup = React.createClass({
  render: function() {
    var style = {
      container: {
        position: "relative",
        padding: "1em",
        minHeight: "100vh",
        backgroundImage: "url('../../images/bg.jpg')",
        backgroundSize: "cover",
        color: "#72777c"
      },
      login_area: {
        maxWidth: "380px",
        margin: "50vh auto 0",
        padding: "1.2em 1.6em",
        transform: "translateY(-50%)",
        background: "white",
        boxShadow: "0 0 0 50vmax rgba(0,0,0,.8)"
      },
      input: {
        margin: "2px 6px 16px 0",
        padding: "3px",
        border: "1px solid #ddd",
        boxSizing: "border-box",
        width: "100%",
        fontSize: "1.5em",
        background: "#fbfbfb",
        color: "#32373c",
      }
    }
    return (
      // return value require only one root element
      <div style={style.container}>
        <div className="login-area" style={style.login_area}>
          <p style={{margin: "0"}}>
            <label htmlFor="user-name">用户名</label><br />
            <input type="text" id="user-name" style={style.input} />
          </p>
          <p style={{margin: "0"}}>
            <label htmlFor="user-password">密码</label><br />
            <input type="password" id="user-password" style={style.input} />
          </p>
          <p style={{margin: "0"}}>
            <label htmlFor="user-verify">再次输入密码</label><br />
            <input type="password" id="user-verify" style={style.input} />
          </p>
          <p style={{margin: "0",
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "flex-end"}}>
            <button className="primary">注册</button>
          </p>
          <p style={{fontSize: ".8em", marginTop: "3em"}}>
            <Link to="login" className="link-to">登陆</Link>|
            <a href="#" className="link-to">忘记密码？</a>
          </p>
          <p style={{fontSize: ".8em"}}>
            <Link to="/blog" className="link-to">←回到博客首页</Link>
          </p>
        </div>
      </div>
    );
  }
});

module.exports = Signup;
