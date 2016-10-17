var React = require("react");
import { Link } from "react-router";

var Articles = React.createClass({
  componentDidMount: function() {
      this.props.posts.map(function(post) {
          console.log(post);
      });
  },

  render: function() {
    return (
      <section className="posts-container">
        {this.props.posts.map(function(post) {
          return (
            <article key={post.id}>
              <h3 className="post-title"><Link to="#">{post.title}</Link></h3>
              <p className="post-info">
                Posted on {post.date} by PepperPapa
              </p>
              <p className="post-summary">{post.summary}</p>
              <p style={{marginTop: "2em"}}>
                <Link to="#" className="link-expand">阅读全文 »</Link>
              </p>
            </article>
          );
        })}
      </section>
    );
  }
});

module.exports = Articles;
