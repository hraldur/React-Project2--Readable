import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { Row, Col } from "react-bootstrap";
import { asyncEditPost } from "../../actions/";

class EditPost extends Component {
  state = {
    modalIsOpen: false,
    post: {
      title: null,
      body: null
    }
  };

  componentWillMount() {
    Modal.setAppElement("body");
  }

  openModal = () => {
    let post = {};
    post["title"] = this.props.posts.post.title;
    post["body"] = this.props.posts.post.body;
    this.setState({
      modalIsOpen: true,
      post: post
    });
  };

  handleChange = (propertyName, event) => {
    const post = this.state.post;
    if (event.target) {
      post[propertyName] = event.target.value;
      this.setState({ post: post });
    }
  };

  closeModal = () => {
    const postId = this.props.posts.post.id;
    const posts = this.state.post;
    const title = posts["title"];
    const body = posts["body"];
    this.props.editPost(postId, title, body);
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div>
        <RaisedButton onClick={this.openModal}>
          <h6 className="editBtn">Edit Post</h6>
        </RaisedButton>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={style}
        >
          <Row>
            <form>
              <Col md={12}>
                <TextField
                  className="textField"
                  hintText="title"
                  value={this.state.post["title"]}
                  onChange={this.handleChange.bind(this, "title")}
                />
              </Col>

              <Col md={12}>
                <TextField
                  className="textField"
                  hintText="body"
                  multiLine={true}
                  value={this.state.post["body"]}
                  onChange={this.handleChange.bind(this, "body")}
                />
              </Col>

              <Col md={12}>
                <div>
                  <RaisedButton
                    type="button"
                    label="Save"
                    onClick={this.closeModal}
                    className="raisedButton"
                  />
                </div>
              </Col>
            </form>
          </Row>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editPost: asyncEditPost(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);

const style = {
  content: {
    border: "0",
    bottom: "auto",
    left: "45%",
    top: "30%"
  }
};
