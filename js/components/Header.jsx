var React = require("react");
import { Link } from "react-router";

var Header = React.createClass({
  render: function() {
    return (
      <header>
        <div>
          <h1><Link to="/blog">Pepperpapa's Blog</Link></h1>
          <nav>
            <ul>
              <li><Link to="/login" className="link-header">登陆</Link></li>
              <li><Link to="/signup" className="link-header">注册</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
});

module.exports = Header;
