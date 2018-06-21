import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Grid } from "react-bootstrap";
import { asyncGetPostsByCategory } from "../../actions/";
import ListCategories from "../Categories/ListCategories";
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "react-router-dom";

import validatePosts from "../../utils/helpers"

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
      <Grid>
        <Row>
          <Col md={3}>
            <Col md={12}>
              <ListCategories categories={this.props.categories} />
            </Col>
            <Col md={12}>
              <RaisedButton className="postBtn">
                <Link to="/posts" className="link">
                  New Post
                </Link>
              </RaisedButton>
            </Col>
          </Col>
          <Col md={9}>
            {typeof this.props.category !== this.props.posts.category &&
              this.handleChangeCategory()}
            {typeof this.props.posts.posts !== "undefined" &&
              validatePosts(this.props.posts.posts)}

          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
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
