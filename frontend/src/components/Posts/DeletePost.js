import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import RaisedButton from "material-ui/RaisedButton";
import { Row, Col } from "react-bootstrap";

import { asyncDeletePost } from "../../actions/";

class DeletePost extends Component {
  state = {
    modalIsOpen: false
  };

  openModal = () => {
    this.setState({
      modalIsOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
  };

  deleting = () => {
    const postId = this.props.post.id;
    this.props.deletePost(postId);
    this.setState({
      modalIsOpen: false
    });
    javascript:window.location.reload()
  };

  render() {
    return (
      <Row>
        <Col md={6}>
          <RaisedButton onClick={this.openModal}>
            <h6 className="deleteBtn">Delete</h6>
          </RaisedButton>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={style}
          >
            <form>
              <div>
                <h4>Are you sure you want to delete this post?</h4>

                <RaisedButton type="button" onClick={() => this.deleting()}>
                  <Link to={`/`} className="link">
                    Delete
                  </Link>
                </RaisedButton>
                <RaisedButton type="button" onClick={this.closeModal}>
                  Cancel
                </RaisedButton>
              </div>
            </form>
          </Modal>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: asyncDeletePost(dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DeletePost);

const style = {
  content: {
    border: "0",
    bottom: "auto",
    left: "45%",
    top: "40%"
  }
};
