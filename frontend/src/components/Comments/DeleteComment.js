import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import RaisedButton from "material-ui/RaisedButton";
import { Row, Col } from "react-bootstrap";

import { asyncDeleteComment } from "../../actions/";

class DeleteComment extends Component {
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
    const commentId = this.props.commentId;
    this.props.deleteComment(commentId);
    this.setState({
      modalIsOpen: false
    });
    window.location.reload()
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
                  <h4>Are you sure you want to delete this comment?</h4>

                  <RaisedButton type="button" onClick={() => this.deleting()}>
                      Delete
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

function mapDispatchToProps(dispatch) {
  return {
    deleteComment: asyncDeleteComment(dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(DeleteComment);

const style = {
  content: {
    border: "0",
    bottom: "auto",
    left: "45%",
    top: "40%"
  }
};
