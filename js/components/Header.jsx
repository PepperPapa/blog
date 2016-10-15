var React = require("react");

var Header = React.createClass({
  render: function() {
    return (
      <header>
        <div>
          <h1>Pepperpapa's Blog</h1>
          <nav>
            <ul>
              <li><a href="#">登陆</a></li>
              <li><a href="#">注册</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
});

module.exports = Header;
