var React = require("react");

var Main = React.createClass({
  render: function() {
    return (
      <main>
        <section>
          <article>
            <h1>post test</h1>
            <h2>post at 2016-10-13 22:48</h2>
            <p>test post</p>
          </article>
        </section>
        <aside>
          <section>
            <h2>category</h2>
            <ul>
              <li>web frontend</li>
              <li>math</li>
            </ul>
          </section>
          <section>
            <h2>recent posts</h2>
            <ul>
              <li>web frontend</li>
              <li>math</li>
            </ul>
          </section>
        </aside>
      </main>
    );
  }
});

module.exports = Main;
