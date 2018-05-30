import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { asyncGetCategories, asyncGetPosts } from "../actions/";

import "./App.css";
import Categories from "./Categories/Categories";
import Posts from "./Posts/Posts";
import SinglePost from "./Posts/SinglePost";

class App extends Component {
  componentWillMount() {
    this.props.getCategories();
    this.props.getPosts();
  }

  render() {
    return (
      <Router>
        <div>
          {["/", "/categories"].map(path => (
            <Route exact path={path} key={path} component={Categories} />
          ))}
          <Route exact path="/:category/posts" component={Posts} />
          <Route exact path="/posts/:id" component={SinglePost} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
