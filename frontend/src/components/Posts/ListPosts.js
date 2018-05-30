import React from "react";
import { Link } from "react-router-dom";

export default function ListPosts({ posts }) {
  return (
    <div>
      <ul className="list">
        {console.log(posts)}
        {typeof posts !== "undefined" &&
          posts.map(post => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`} className="link">
                <h2>{post.title}</h2>
              </Link>
              <p>{post.body}</p>
              <h6>Posted by {post.author}</h6>

              <h6>{post.commentCount} Comments</h6>

              <h6>Score {post.voteScore}</h6>
            </li>
          ))}
      </ul>
    </div>
  );
}
