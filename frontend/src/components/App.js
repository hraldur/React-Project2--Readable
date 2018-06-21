import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import { Grid, Row, Col } from "react-bootstrap";
import { asyncGetCategories, asyncGetPosts } from "../actions/";
import Categories from "./Categories/Categories";
import Posts from "./Posts/Posts";
import SinglePost from "./Posts/SinglePost";
import SingleComment from "./Comments/SingleComment";
import Comments from "./Comments/Comments";
import PostForm from "./Posts/PostForm";
import CommentForm from "./Comments/CommentForm";

class App extends Component {
  componentWillMount() {
    this.props.getCategories();
    this.props.getPosts();
  }

  render() {
    return (
      <Grid>

        <Router>

          <div>
            <Row>
              <Col md={12}>
                <Link to={`/`} className="link">
                  <h1 className="titleStyle">Readable</h1>
                </Link>
              </Col>
            </Row>
            {["/", "/categories"].map(path => (
              <Route exact path={path} key={path} component={Categories} />
            ))}
            <Route exact path="/:category/posts" component={Posts} />
            <Route exact path="/posts" component={PostForm} />
            <Route exact path="/comments" component={CommentForm} />
            <Route exact path="/posts/:id" component={SinglePost} />
            <Route exact path="/posts/:id/comments" component={Comments} />
            <Route exact path="/comments/:id" component={SingleComment} />
          </div>
        </Router>
      </Grid>
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
