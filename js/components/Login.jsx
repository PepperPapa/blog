var React = require("react");
import { Link } from "react-router";

var LoginTip = function(props) {
    return (
      <span style={{fontSize: ".9em",
                    color: props.color}}>{props.info}</span>
    );
}

var Login = React.createClass({
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

    let {user, error, logging_in} = this.props.currentUser;
    var tip_info = {};
    if (logging_in) {
      tip_info.info = "正在登陆请稍后 ";
      tip_info.color = "blue";
    } else if (error) {
      tip_info.info = error.message;
      tip_info.color = "red";
    } else if (user) {
      tip_info.info = "登陆成功";
      tip_info.color = "green";
    }
    return (
      // return value require only one root element
      <div style={style.container}>
        <form
          className="login-area"
          style={style.login_area}
          onSubmit={this.props.userLogin}>
          <div style={{margin: "0"}}>
            <label htmlFor="user-name">用户名</label><br />
            <input
              id="user-name"
              type="text"
              style={style.input}
              pattern="[a-zA-Z_][a-zA-Z0-9_]{5,15}"
              title="长度5-15的大写字母、小写字母、数字、下划线组合"
              required
              onChange={this.props.handleUserNameChange} />
          </div>
          <div style={{margin: "0"}}>
            <label htmlFor="user-password">密码</label><br />
            <input
              id="user-password"
              type="password"
              style={style.input}
              pattern="\S{6,26}"
              title="长度6-26的非空字符"
              required
              onChange={this.props.handlePasswordChange} />
          </div>
          <div style={{margin: "0",
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "space-between"}}>
            <label htmlFor="user-rember">
              <input
                id="user-rember"
                type="checkbox"
                defaultChecked
                onChange={this.props.handleRememberMe} />
              记住我
            </label>
            <LoginTip info={tip_info.info} color={tip_info.color} />
            <button type="submit" className="normal">登陆</button>
          </div>
          <div style={{fontSize: ".8em", marginTop: "3em"}}>
            <Link to="signup" className="link-to">注册</Link>|
            <a href="#" className="link-to">忘记密码？</a>
          </div>
          <div style={{fontSize: ".8em"}}>
            <Link to="/blog" className="link-to">←回到博客首页</Link>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = Login;
