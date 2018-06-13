import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import RaisedButton from "material-ui/RaisedButton";
import { Row, Col } from "react-bootstrap";

import { asyncVotePost } from "../../actions/";

class Voting extends Component {
  state = {
    modalIsOpen: false
  };

  componentWillMount() {
    Modal.setAppElement("body");
  }

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
    const post = this.props.posts.post;
    let newVote = this.props.posts.post.voteScore;
    if (vote === "upVote") {
      newVote = newVote + 1;
    } else if (vote === "downVote") {
      newVote = newVote - 1;
    }
    post["voteScore"] = newVote;
    const postId = this.props.posts.post.id;
    this.closeModal();
    this.props.votePost(postId, vote);
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
              {typeof this.props.posts.post !== "undefined" && (
                <div>
                  <h5>{this.props.posts.post["voteScore"]}</h5>
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
          {typeof this.props.posts.post !== "undefined" && (
            <div className="vote">
              <h5>{this.props.posts.post["voteScore"]}</h5>
            </div>
          )}
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

function mapDispatchToProps(dispatch) {
  return {
    votePost: asyncVotePost(dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Voting);

const style = {
  content: {
    border: "0",
    bottom: "auto",
    left: "45%",
    top: "50%"
  }
};
