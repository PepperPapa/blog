var React = require("react");
import { Link } from "react-router";

import ArticlesContainer from "../containers/ArticlesContainer";

var Main = React.createClass({
  render: function() {
    return (
      <main>
        <ArticlesContainer />
        <aside>
          <section className="search-posts">
            <input type="text" placeholder="search ariticle" />
            <input type="image" src="./images/search_btn.png" />
          </section>
          <section>
            <h2>分类</h2>
            <ul>
              <li><a href="#">web frontend</a></li>
              <li><a href="#">math</a></li>
            </ul>
          </section>
          <section>
            <h2>最近文章</h2>
            <ul>
              <li><a href="#">web frontend</a></li>
              <li><a href="#">math</a></li>
            </ul>
          </section>
        </aside>
      </main>
    );
  }
});

module.exports = Main;
