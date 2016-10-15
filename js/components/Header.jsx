var React = require("react");
import { Link } from "react-router";

var Header = React.createClass({
  render: function() {
    return (
      <header>
        <div>
          <h1>Pepperpapa's Blog</h1>
          <nav>
            <ul>
              <li><Link to="/login">登陆</Link></li>
              <li><Link to="/signup">注册</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
});

module.exports = Header;
