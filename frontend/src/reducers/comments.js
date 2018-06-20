import {
  GET_COMMENTS,
  GET_SINGLE_COMMENT,
  ADD_COMMENT,
  VOTE_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT
} from "../actions/types";

const comments = (state = {}, action) => {
  const { comments, postId, commentId, comment } = action;

  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments,
        postId
      };
    case GET_SINGLE_COMMENT:
      return {
        ...state,
        comment,
        commentId
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: {
          ...state.comments,
          [commentId]: comment
        }
      };
    case VOTE_COMMENT:
      return {
        ...state,
        comments: {
          ...state.comments,
          [commentId]: comment
        }
      };

    case DELETE_COMMENT:
      return {
        ...state,
        comment: {
          ...state.comments,
          [commentId]: comment
        }
      };
    case EDIT_COMMENT:
      return {
        ...state,
        posts: {
          ...state.comments,
          [commentId]: comment
        }
      };

    default:
      return state;
  }
};
export default comments;
