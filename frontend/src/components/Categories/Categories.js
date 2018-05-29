import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { asyncGetCategories } from "../../actions/";


import ListCategories from "./ListCategories";


class Categories extends Component {
  componentWillMount() {
    this.props.getCategories();
  }

  render() {
    return (
      <ListCategories categories={this.props.categories} />
    )
  }

}

const mapStateToProps = state => {
  console.log(state);
  return {
    categories: state.categories,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getCategories: asyncGetCategories(dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
