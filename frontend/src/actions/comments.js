import api from "../utils/api";
export const GET_COMMENTS = "GET_COMMENTS";
export const GET_SINGLE_COMMENT = "GET_SINGLE_COMMENT";

export const ADD_COMMENT = "ADD_COMMENT";
export const VOTE_COMMENT = "VOTE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";

export const getComments = (comments, postId) => {
  return {
    type: GET_COMMENTS,
    comments: comments,
    postId: postId
  };
};

export const asyncGetComments = (dispatch, postId) => () => {
  api
    .getComments(postId)
    .then(comments => dispatch(getComments(comments, postId)));
};

export const getSingleComment = (comment, commentId) => {
  return {
    type: GET_SINGLE_COMMENT,
    comment: comment,
    commentId: commentId
  };
};

export const asyncGetSingleComment = (dispatch, commentId) => () => {
  api
    .getSingleComment(commentId)
    .then(comment => dispatch(getSingleComment(comment, commentId)));
};

export const addComment = ({ newComment }) => {
  return {
    type: ADD_COMMENT,
    comment: newComment
  };
};

export const asyncAddComment = dispatch => newComment => {
  api.addComment(newComment).then(comment => dispatch(addComment(comment)));
};

export const voteComment = status => {
  return {
    type: VOTE_COMMENT
  };
};

export const asyncVoteComment = dispatch => (commentId, option) => {
  api.voteComment(commentId, option).then(status => dispatch(voteComment(status)));
};


export const deleteComment = () => {
  return {
    type: DELETE_COMMENT
  };
};

export const asyncDeleteComment = dispatch => (commentId) => {
  api.deleteComment(commentId).then(() => dispatch(voteComment()));
};

export const editComment = status => {
  return {
    type: EDIT_COMMENT,
  };
};

export const asyncEditComment = dispatch => (commentId, timestamp, body) => {
  api.editComment(commentId, timestamp, body).then(status => dispatch(editComment(status)));
};
