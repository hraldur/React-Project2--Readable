import React from "react";
import { Link } from "react-router-dom";
import Paper from "material-ui/Paper";
import { setTime } from "../../utils/helpers";

export default function ListAllPosts({ posts }) {
  return (
    <div style={posts}>
      <ul className="list">
        {typeof posts !== "undefined" &&
          posts.map(post => (
            <Paper style={paperStyle} key={post.id}>
              <li>
                <Link to={`/posts/${post.id}`} className="link">
                  <h3>{post.title}</h3>
                </Link>
                <h6>{setTime(post.timestamp)}</h6>
                <p>{post.body}</p>
              </li>
            </Paper>
          ))}
      </ul>
    </div>
  );
}

const paperStyle = {
  display: "inline-block",
  margin: "0px 32px 16px 0px",
  padding: "16px 16px 16px 32px",
  width: "100%"
};

const posts = {
  display: "inline-block",
  width: "100%"
};
