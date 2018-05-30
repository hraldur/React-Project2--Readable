import React from "react";
import { Link } from "react-router-dom";

export default function ListSinglePosts({ post, postId }) {
  return (
    <div>
      {typeof post !== "undefined" && (
        <div>
          <Link to={`/posts/${postId}/comments`} className="link">
            <h3>{post.title}</h3>
          </Link>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}
