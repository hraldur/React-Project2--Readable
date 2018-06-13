import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import RaisedButton from "material-ui/RaisedButton";
import { Row, Col } from "react-bootstrap";

import { asyncVoteComment } from "../../actions/";

class VotingComment extends Component {
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

  voting = vote => {
    const comment = this.props.comments.comment;
    let newVote = this.props.comments.comment.voteScore;
    if (vote === "upVote") {
      newVote = newVote + 1;
    } else if (vote === "downVote") {
      newVote = newVote - 1;
    }
    comment["voteScore"] = newVote;
    const commentId = this.props.comments.comment.id;
    this.props.voteComment(commentId, vote);
  };

  render() {
    return (
      <Row>
        <Col md={6}>
          <RaisedButton onClick={this.openModal}>Vote</RaisedButton>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={style}
          >
            <form>
              {typeof this.props.comments.comment !== "undefined" && (
                <div>
                  <RaisedButton
                    type="button"
                    onClick={() => this.voting("upVote")}
                  >
                    UpVote
                  </RaisedButton>
                  <RaisedButton
                    type="button"
                    onClick={() => this.voting("downVote")}
                  >
                    DownVote
                  </RaisedButton>
                </div>
              )}
            </form>
          </Modal>
        </Col>
        <Col md={4}>
          {typeof this.props.comments.comment !== "undefined" && (
            <div className="vote">
              <h5>{this.props.comments.comment["voteScore"]}</h5>
            </div>
          )}
        </Col>

      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

function mapDispatchToProps(dispatch) {
  return {
    voteComment: asyncVoteComment(dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(VotingComment);

const style = {
  content: {
    border: "0",
    bottom: "auto",
    left: "45%",
    top: "50%"
  }
};
