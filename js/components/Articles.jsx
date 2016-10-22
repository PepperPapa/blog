var React = require("react");
import { Link } from "react-router";

var Articles = React.createClass({
  render: function() {
    return (
      <section className="posts-container">
        {this.props.posts.map(function(post) {
          return (
            <article key={post.id}>
              <h3 className="post-title">
                <Link
                  to={`/blog/${post.id}`}>
                  {post.subject}
                </Link>
              </h3>
              <p className="post-info">
                Posted on {post.created} by PepperPapa
              </p>
              <p className="post-summary">{post.content}</p>
              <p style={{marginTop: "2em"}}>
                <Link to={`blog/${post.id}`} className="link-expand">阅读全文 »</Link>
              </p>
            </article>
          );
        })}
      </section>
    );
  }
});

module.exports = Articles;
