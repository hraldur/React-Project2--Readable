import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "react-router-dom";
import { asyncGetSingleComment } from "../../actions/";
import VotingComment from "./VotingComment";
import DeleteComment from "./DeleteComment";
import EditComment from "./EditComment";
import ListSingleComment from "./ListSingleComment";

class SingleComment extends Component {
  componentWillMount() {
    this.props.getSingleComment();
  }

  render() {
    return (
      <Row>
        <Col md={12}>
          <ListSingleComment comment={this.props.comments.comment} />
          <Row>
            <Col md={3}>
              <VotingComment />
              <RaisedButton>
                {typeof this.props.comments.comment !== "undefined" && (
                  <Link to={`/posts/${this.props.comments.comment.parentId}`} className="link">
                    Back to Post
                  </Link>
                )}
              </RaisedButton>
            </Col>
          </Row>
          <Row>
            <Col md={9} />
            <Col md={3}>
              {console.log(this.props.comments)}
              <EditComment comment={this.props.comments.comment}/>
              <DeleteComment commentId={this.props.comments.id}/>

            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments,
    commentId: ownProps.match.params.id
  };
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getSingleComment: asyncGetSingleComment(dispatch, ownProps.match.params.id)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleComment);
