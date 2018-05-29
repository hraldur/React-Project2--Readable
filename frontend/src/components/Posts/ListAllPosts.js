import React from "react";
import { Link } from "react-router-dom";
import { setTime } from "../../utils/helpers";

export default function ListAllPosts({ posts }) {
  return (
    <div>

        {typeof posts !== "undefined" &&
          posts.map(post => (
            <ul key={post.id}>
              <li>
                <Link to={`/posts/${post.id}`} className="link">
                  <h3>{post.title}</h3>
                </Link>
                <h6>{setTime(post.timestamp)}</h6>
                <p>{post.body}</p>
              </li>
            </ul>
          ))}

    </div>
  );
}
