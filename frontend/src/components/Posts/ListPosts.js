import React from "react";
import { Link } from "react-router-dom";
import Paper from "material-ui/Paper";
import { Row, Col } from "react-bootstrap";

export default function ListPosts({ posts }) {
  return (
    <Row>
      <Col md={12}>
        <ul className="list">
          {typeof posts !== "undefined" &&
            posts.map(post => (
              <Paper style={paperStyle} key={post.id}>
                <li>
                  <Link to={`/posts/${post.id}`} className="link">
                    <h2>{post.title}</h2>
                  </Link>
                  <p>{post.body}</p>
                  <h6>Posted by {post.author}</h6>
                  <Row>
                    <Col md={3}>
                      <h6>{post.commentCount} Comments</h6>
                    </Col>
                    <Col md={3}>
                      <h6>Score {post.voteScore}</h6>
                    </Col>
                  </Row>
                </li>
              </Paper>
            ))}
        </ul>
      </Col>
    </Row>
  );
}

const paperStyle = {
  display: "inline-block",
  margin: "0px 32px 16px 0px",
  padding: "16px 16px 16px 32px",
  width: "100%"
};
