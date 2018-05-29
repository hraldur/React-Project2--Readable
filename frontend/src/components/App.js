import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { asyncGetCategories } from "../actions/";

import "./App.css";
import Categories from "./Categories/Categories";

class App extends Component {
  componentWillMount() {
    this.props.getCategories();
  }

  render() {
    return (
      <Router>
        <div>
          {["/", "/categories"].map(path => (
            <Route exact path={path} key={path} component={Categories} />
          ))}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getCategories: asyncGetCategories(dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
