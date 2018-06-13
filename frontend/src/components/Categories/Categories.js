import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Grid } from "react-bootstrap";
import RaisedButton from "material-ui/RaisedButton";

import { asyncGetCategories, asyncGetPosts } from "../../actions/";
import ListAllPosts from "../Posts/ListAllPosts";
import ListCategories from "./ListCategories";

class Categories extends Component {
  componentWillMount() {
    this.props.getCategories();
    this.props.getPosts();
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <h1 className="titleStyle">Readable</h1>
          </Col>
        </Row>
        <Row >
          <Col md={3}>
            <Row>
              <Col md={12}>
                <ListCategories categories={this.props.categories} />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Link to="/posts" className="link">
                  <RaisedButton className="postBtn">New Post</RaisedButton>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col md={9}>
            <ListAllPosts posts={this.props.posts.posts} />
          </Col>
        </Row>
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
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
