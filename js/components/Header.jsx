var React = require("react");
import { Link } from "react-router";

var Header = React.createClass({
  render: function() {
    const {user, logging_in, error} = this.props.currentUser;

    if (user) {
      return (
        <header>
          <div>
            <h1><Link to="/blog">Pepperpapa's Blog</Link></h1>
            <nav>
              <ul>
                <li>
                  <Link to="/blog/newpost" className="link-header">写文章</Link>
                </li>
                <li>
                  <a href="#" className="link-header">{user}</a>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="link-header"
                    onClick={this.props.logout}>注销</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      );
    } else {
      return (
        <header>
          <div>
            <h1><Link to="/blog">Pepperpapa's Blog</Link></h1>
            <nav>
              <ul>
                <li>
                  <Link to="/login" className="link-header">登陆</Link>
                </li>
                <li style={{display: "none"}}>
                  <Link to="/signup" className="link-header">注册</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      );
    } // end of else
  } // end of render
});

module.exports = Header;
