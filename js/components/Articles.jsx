var React = require("react");
import { Link } from "react-router";

var Articles = React.createClass({
  render: function() {
    const { posts, loading, error } = this.props.postsList;
    if (loading) {
      return (
        <section className="posts-container">
          <article>
            <span>正在加载...</span>
          </article>
        </section>
      );
    } else if (error) {
      return (
        <section className="posts-container">
          <article>
            <span>加载出错：{error.message}</span>
          </article>
        </section>
      );
    }

    return (
      <section className="posts-container">
        {posts.map(function(post) {
          /*  post format:
          [id, subject, content, created, last_modified]
          */
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
