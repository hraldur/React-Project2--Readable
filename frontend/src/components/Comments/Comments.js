import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { asyncGetComments } from "../../actions/";

import ListComments from "./ListComments";

class Comments extends Component {
  componentWillMount() {
    this.props.getComments();
  }

  validateComments = comments => {
    let validComments = [];
    if (comments[Object.keys(comments).length - 1] === undefined) {
      let counter = 0;
      for (var key in comments) {
        if (comments[key] !== undefined) {
          validComments[counter] = comments[key];
        }
        counter = counter + 1;
      }
    } else {
      validComments = comments;
    }
    return <ListComments posts={validComments} />;
  };

  render() {
    return (
      <div>
        {typeof this.props.comments.comments !== "undefined" &&
          this.validateComments(this.props.comments.comments)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments
  };
};

function mapDispatchToProps(dispatch, ownProps) {
  let postId = null;
  if (ownProps.match !== undefined) {
    postId = ownProps.match.params.id;
  } else {
    postId = ownProps.postId;
  }
  return {
    getComments: asyncGetComments(dispatch, postId)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments);
