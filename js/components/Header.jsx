var React = require("react");
import { Link } from "react-router";

var Header = React.createClass({
  render: function() {
    let {user, logging_in, error} = this.props.currentUser;

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
                  <Link to="#" className="link-header">{user}</Link>
                </li>
                <li><Link to="#" className="link-header">注销</Link></li>
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
                <li>
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
