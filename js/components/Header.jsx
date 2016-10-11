var React = require("react");

var Header = React.createClass({
  render: function() {
    return (
      <header>
        <div>
          <img className="logo" src="/blog/images/logo.png" alt="logo" />
          <h1>Pepperpapa's Blog</h1>
          <nav>
            <ul>
              <li className="nav nav-alert">
                message
              </li>
              <li className="nav nav-user">
                <a href="#">user</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
});

module.exports = Header;
