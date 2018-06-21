import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { Row, Col } from "react-bootstrap";

import { asyncAddComment } from "../../actions/";

class CommentForm extends Component {
  state = {
    comment: {
      id: null,
      timestamp: null,
      body: null,
      author: null,
      parentId: null
    },
    alertMsg: null
  };

  handleChange = (propertyName, event) => {
    const uuid = require("uuid/v1");
    const comment = this.state.comment;
    if (event.target) {
      comment[propertyName] = event.target.value;
      comment["timestamp"] = Date.now();
      comment["id"] = uuid();
      comment["parentId"] = this.props.posts.post.id;
      this.setState({ comment: comment });
    }
  };

  getInputValue = event => {
    if (event === null) {
      return "";
    } else {
      return event;
    }
  };

  handleAddComment() {
    this.props.addComment({
      comment: this.state.comment
    });
  }

  validComment = () => {
    const { addComment } = this.props;
    const comment = this.state.comment;
    if (
      comment["title"] === null ||
      comment["body"] === null
    ) {
      const alertMsg = "Please fill in all forms!"
      this.setState({ alertMsg: alertMsg });
    } else {
      addComment(this.state.comment);
      const alertMsg = "Your comment has been successfully added"
      this.setState({ alertMsg: alertMsg });
    }
  };

  render() {

    return (
      <div>
        <Row>
          <form>
            <Col md={12}>
              <TextField
                type="text"
                hintText="Author"
                onChange={this.handleChange.bind(this, "author")}
                value={this.getInputValue(this.state.comment.author)}
              />
            </Col>
            <Col md={12}>
              <TextField
                hintText="Comment"
                multiLine={true}
                onChange={this.handleChange.bind(this, "body")}
                value={this.getInputValue(this.state.comment.body)}
              />
            </Col>
            {this.state.alertMsg !== null &&
            <h3 style={{color:'red'}}>{this.state.alertMsg}</h3>}
            {typeof this.props.posts.post === "undefined" &&(
              <div>
              <h3 style={{color:'red'}}>Please go back and select a post to comment on.</h3>
              <Col md={6}>
                <RaisedButton>
                  <Link
                    to={`/`}
                    className="link"
                  >
                    Go Back
                  </Link>
                </RaisedButton>
              </Col>
            </div>)}
            {typeof this.props.posts.post !== "undefined" && (
              <Row>
                <Col md={6}>
                  <RaisedButton
                    label="Comment"
                    type="button"
                    onClick={() => this.validComment()}
                  />
                </Col>
                <Col md={6}>
                  <RaisedButton>
                    <Link
                      to={`/posts/${this.props.posts.post.id}`}
                      className="link"
                    >
                      Go Back
                    </Link>
                  </RaisedButton>
                </Col>
              </Row>
            )}
          </form>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comment: state.comment,
    posts: state.posts
  };
};

function mapDispatchToProps(dispatch) {
  return {
    addComment: asyncAddComment(dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
