import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Grid } from "react-bootstrap";
import RaisedButton from "material-ui/RaisedButton";
import sortBy from "sort-by";

import { asyncGetCategories, asyncGetPosts } from "../../actions/";


import ListCategories from "./ListCategories";
import validatePosts from "../../utils/helpers";

class Categories extends Component {
  /*eslint-disable no-script-url*/
  state = {
    sortedPosts: {}
  };
  componentWillMount() {
    this.props.getCategories();
    this.props.getPosts();
  }

  handleOrder = orderBy => {
    const sortedPosts = this.props.posts.posts;
    if (orderBy === "voteScore") {
      sortedPosts.sort(sortBy("-voteScore"));
    } else if (orderBy === "timestamp") {
      sortedPosts.sort(sortBy("-timestamp"));
    }

    this.setState({
      sortedPosts: sortedPosts
    });
  };

  render() {
    return (
      <Grid>
        <Row>
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

            <span className="orderBy">
              Sort by:&nbsp;
              <a
                href="javascript:void(0)"
                onClick={() => this.handleOrder("timestamp")}
              >
                Date
              </a>
              |
              <a
                href="javascript:void(0)"
                onClick={() => this.handleOrder("voteScore")}
              >
                Score
              </a>
            </span>

            {Object.keys(this.state.sortedPosts).length === 0 &&
              typeof this.props.posts.posts !== "undefined" &&
              validatePosts(this.props.posts.posts)}

            {typeof this.state.sortedPosts !== "undefined" &&
              validatePosts(this.state.sortedPosts)}
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
