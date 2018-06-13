import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Paper from "material-ui/Paper";
import { asyncGetComments } from "../../actions/";

class ListComments extends Component {
  componentWillMount() {
    this.props.getComments();
  }

  render() {
    return (
      <div>
        {console.log(this.props.comments)}
        {typeof this.props.comments.comments !== "undefined" &&
          (Object.keys(this.props.comments).length > 0 &&
            this.props.comments.comments.map(comment => (
              <Paper style={paperStyle} key={comment.id}>
                <li className="list">
                  <Link to={`/comments/${comment.id}`} className="link">
                    <h3>{comment.author}</h3>
                  </Link>
                  <p>{comment.body}</p>
                </li>
              </Paper>
            )))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments
  };
};

function mapDispatchToProps(dispatch, ownProps) {
  let postId = null;
  if (ownProps.match !== undefined) {
    postId = ownProps.match.params.id;
  } else {
    postId = ownProps.postId;
  }
  return {
    getComments: asyncGetComments(dispatch, postId)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ListComments);

const paperStyle = {
  display: "inline-block",
  margin: "0px 32px 16px 0px",
  padding: "16px 16px 16px 32px",
  width: "100%"
};
