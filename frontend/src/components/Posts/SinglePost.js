import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { asyncGetSinglePost } from "../../actions/";

import ListCategories from "../Categories/ListCategories";
import ListSinglePost from "./ListSinglePost";


class SinglePost extends Component {
  componentDidMount() {
    this.props.getSinglePost();
  }

  render() {
    return (
      <div>
        <h1 className="titleStyle">Readable</h1>

        <ListCategories categories={this.props.categories} />
      
        <ListSinglePost
          post={this.props.posts.post}
          postId={this.props.postId}
        />

      </div>
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
