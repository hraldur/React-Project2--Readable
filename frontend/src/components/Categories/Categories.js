import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { asyncGetCategories, asyncGetPosts } from "../../actions/";

import ListCategories from "./ListCategories";
import ListAllPosts from "../Posts/ListAllPosts";

class Categories extends Component {
  componentWillMount() {
    this.props.getCategories();
    this.props.getPosts();
  }

  render() {
    return (
      <div>
        <ListCategories categories={this.props.categories} />
        <ListAllPosts posts={this.props.posts.posts} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    categories: state.categories,
    posts: state.posts
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getCategories: asyncGetCategories(dispatch),
    getPosts: asyncGetPosts(dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
