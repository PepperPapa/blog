var React = require("react");
import { Link } from "react-router";

var Articles = React.createClass({
  render: function() {
    var posts = this.props.posts;
    var post_index_list = Object.keys(posts);
    post_index_list.sort(function(a, b) {return a < b;});
    return (
      <section className="posts-container">
        {post_index_list.map(function(id) {
          return (
            <article key={id}>
              <h3 className="post-title">
                <Link
                  to={`/blog/${id}`}>
                  {posts[id].subject}
                </Link>
              </h3>
              <p className="post-info">
                Posted on {posts[id].created} by PepperPapa
              </p>
              <p className="post-summary">{posts[id].content}</p>
              <p style={{marginTop: "2em"}}>
                <Link to={`blog/${id}`} className="link-expand">阅读全文 »</Link>
              </p>
            </article>
          );
        })}
      </section>
    );
  }
});

module.exports = Articles;
