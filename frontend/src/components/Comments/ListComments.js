import React from "react";
import { Link } from "react-router-dom";
import Paper from "material-ui/Paper";
import { Row, Col } from "react-bootstrap";

import DeleteComment from "./DeleteComment";
import EditComment from "./EditComment";

export default function ListComments(comments) {
  return (
    <div>

      {comments.posts.map(comment => (
        <Paper style={paperStyle} key={comment.id}>
          <li className="list">
            <Link to={`/comments/${comment.id}`} className="link">
              <h3>Posted by {comment.author}</h3>
            </Link>
            <p>{comment.body}</p>
            <p>Score {comment.voteScore}</p>
            <Row>
              <Col md={9} />
              <Col md={3}>
                <EditComment comment={comment} />
                <DeleteComment commentId={comment.id} />
              </Col>
            </Row>
          </li>
        </Paper>
      ))}
    </div>
  );
}

const paperStyle = {
  display: "inline-block",
  margin: "0px 32px 16px 0px",
  padding: "16px 16px 16px 32px",
  width: "100%"
};
