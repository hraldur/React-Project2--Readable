import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { asyncGetPostsByCategory } from "../../actions/";
import ListPosts from "./ListPosts";
import ListCategories from "../Categories/ListCategories";

class Posts extends Component {
  componentWillMount() {
    this.props.getPostsByCategory();
  }

  handleChangeCategory() {
    if (this.props.category !== this.props.posts.category) {
      this.props.getPostsByCategory();
    }
  }
  render() {
    return (
      <div>
        <h1 className="titleStyle">Readable</h1>

        <ListCategories categories={this.props.categories} />

        <Link to="/posts" className="link">
          New Post
        </Link>

        {typeof this.props.category !== this.props.posts.category &&
          this.handleChangeCategory()}
        <ListPosts posts={this.props.posts.posts} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(this.state);
  return {
    categories: state.categories,
    posts: state.posts,
    category: ownProps.match.params.category
  };
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getPostsByCategory: asyncGetPostsByCategory(
      dispatch,
      ownProps.match.params.category
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
