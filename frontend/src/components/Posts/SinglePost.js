import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { asyncGetSinglePost } from "../../actions/";
import { Row, Col } from "react-bootstrap";
import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";
import Voting from "./Voting";
import DeletePost from "./DeletePost";
import EditPost from "./EditPost";
import ListCategories from "../Categories/ListCategories";
import ListSinglePost from "./ListSinglePost";
import ListComments from "../Comments/ListComments";

class SinglePost extends Component {
  componentDidMount() {
    this.props.getSinglePost();
  }

  render() {
    return (
      <Row>
        <Col md={12}>
          <h1 className="titleStyle">Readable</h1>
        </Col>
        <Col md={3}>
          <ListCategories categories={this.props.categories} />
          <RaisedButton className="postBtn">
            <Link to="/posts" className="link">
              {" "}
              New Post{" "}
            </Link>
          </RaisedButton>
        </Col>

        <Col md={9}>
          <Paper style={paperStyle}>
            <ListSinglePost
              post={this.props.posts.post}
              postId={this.props.postId}
            />
            <Row>
              <Col md={1.5}>
                <Link to="/comments" className="link">
                  <RaisedButton>Comment</RaisedButton>
                </Link>
              </Col>
              <Col md={3}>
                <Voting />
              </Col>
            </Row>
            <Row>
              <Col md={9} />
              <Col md={3}>
                <EditPost />
                <DeletePost postId={this.props.postId} />
              </Col>
            </Row>
          </Paper>

          <Col md={12}>
            <ListComments postId={this.props.postId} />
          </Col>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories,
    posts: state.posts,
    postId: ownProps.match.params.id
  };
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getSinglePost: asyncGetSinglePost(dispatch, ownProps.match.params.id)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);

const paperStyle = {
  display: "inline-block",
  margin: "0px 32px 16px 0px",
  padding: "16px 16px 16px 32px",
  width: "100%"
};
