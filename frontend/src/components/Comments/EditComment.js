import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

import { asyncEditComment } from "../../actions/";

class EditComment extends Component {
  state = {
    modalIsOpen: false,
    comment: {
      timestamp: null,
      body: null
    }
  };

  componentWillMount() {
    Modal.setAppElement("body");
  }

  openModal = () => {
    let comment = {};
    comment["body"] = this.props.comment.body;
    this.setState({
      modalIsOpen: true,
      comment: comment
    });
  };

  handleChange = (propertyName, event) => {
    const comment = this.state.comment;
    if (event.target) {
      comment[propertyName] = event.target.value;
      this.setState({ comment: comment });
    }
  };

  closeModal = () => {
    const commentId = this.props.comment.id;
    const comment = this.state.comment;
    let timestamp = Date.now();
    const body = comment["body"];
    this.props.editComment(commentId, timestamp, body);

    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div>
        <RaisedButton onClick={this.openModal}>
          <h6 className="editBtn">Edit</h6>
        </RaisedButton>
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
          <Row>
            <form>
              <Col md={12}>
                <TextField
                  multiLine={true}
                  hintText="body"
                  value={this.state.comment["body"]}
                  onChange={this.handleChange.bind(this, "body")}
                />
              </Col>

              <Col md={12}>
                {typeof this.props.comment !== "undefined" && (
                  <RaisedButton type="submit" onClick={this.closeModal}>
                    Save
                  </RaisedButton>
                )}
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
    comment: state.comments.comment
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editComment: asyncEditComment(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditComment);
