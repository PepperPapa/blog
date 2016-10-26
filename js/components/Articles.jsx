var React = require("react");
import { Link } from "react-router";

var Articles = React.createClass({
  render: function() {
    var posts = this.props.posts;
    return (
      <section className="posts-container">
        {posts.map(function(post) {
          /*  post format:
          [id, subject, content, created, last_modified]
          */
          return (
            <article key={post[0]}>
              <h3 className="post-title">
                <Link
                  to={`/blog/${post[0]}`}>
                  {post[1]}
                </Link>
              </h3>
              <p className="post-info">
                Posted on {post[2]} by PepperPapa
              </p>
              <p className="post-summary">{post[3]}</p>
              <p style={{marginTop: "2em"}}>
                <Link to={`blog/${post[0]}`} className="link-expand">阅读全文 »</Link>
              </p>
            </article>
          );
        })}
      </section>
    );
  }
});

module.exports = Articles;
