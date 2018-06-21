import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import { MenuItem } from "material-ui/Menu";
import RaisedButton from "material-ui/RaisedButton";
import { Row, Col } from "react-bootstrap";

import { asyncAddPost } from "../../actions/";

class PostForm extends Component {
  state = {
    post: {
      id: null,
      timestamp: null,
      title: null,
      body: null,
      author: null,
      category: "null",
      voteScore: 0,
      deleted: false,
      commentCount: 0
    },
    alertMsg: null
  };

  componentWillMount() {
    Modal.setAppElement("body");
  }

  handleChange = (propertyName, event) => {
    const uuid = require("uuid/v1");
    const post = this.state.post;
    if (event.target) {
      post[propertyName] = event.target.value;
      post["timestamp"] = Date.now();
      post["id"] = uuid();
      this.setState({ post: post });
    }
  };

  handleSelectChange = (event, index, value) => {
    const post = this.state.post;
    post["category"] = value;
    this.setState({ post: post });
  };

  getInputValue = event => {
    if (event === null) {
      return "";
    } else {
      return event;
    }
  };

  validPost = () => {
    const { addPost } = this.props;
    const post = this.state.post;
    if (
      post["category"] === "null" ||
      post["title"] === null ||
      post["body"] === null ||
      post["author"] === null
    ) {
      const alertMsg = "Please fill in all forms!"
      this.setState({ alertMsg: alertMsg });
    } else {
      addPost(this.state.post);
      const alertMsg = "Your post has been successfully added"
      this.setState({ alertMsg: alertMsg });
    }
  };

  render() {

    return (
      <div>
        <Row>
          <form>
            <Col md={12}>
              <TextField
                type="text"
                hintText="Title"
                onChange={this.handleChange.bind(this, "title")}
                value={this.getInputValue(this.state.post.title)}
              />
            </Col>
            <Col md={12}>
              <TextField
                type="text"
                hintText="Author"
                onChange={this.handleChange.bind(this, "author")}
                value={this.getInputValue(this.state.post.author)}
              />
            </Col>
            <Col md={12}>
              <TextField
                hintText="Post"
                multiLine={true}
                onChange={this.handleChange.bind(this, "body")}
                value={this.getInputValue(this.state.post.body)}
              />
            </Col>
            <Col md={12}>
              <SelectField
                onChange={this.handleSelectChange}
                value={this.state.post.category}
                floatingLabelText="Select Category..."
              >
                {typeof this.props.categories.categories !== "undefined" &&
                  this.props.categories.categories.map(category => (
                    <MenuItem
                      value={category.name}
                      key={category.path}
                      primaryText={category.name}
                    />
                  ))}
              </SelectField>
            </Col>
            {this.state.alertMsg !== null &&
            <h3 style={{color:'red'}}>{this.state.alertMsg}</h3>}
            <Row>
              <Col md={6}>
                <RaisedButton
                  label="Add Post"
                  type="button"
                  onClick={() => this.validPost()}
                />
              </Col>
              <Col md={6}>
                <Link to="/" className="link">
                  <RaisedButton>Go Back</RaisedButton>
                </Link>
              </Col>
            </Row>
          </form>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    post: state.post,
    categories: state.categories
  };
};

function mapDispatchToProps(dispatch) {
  return {
    addPost: asyncAddPost(dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
