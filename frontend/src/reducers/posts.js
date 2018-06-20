import {
  GET_POSTS,
  GET_POSTS_BY_CATEGORY,
  GET_SINGLE_POST,
  ADD_POST,
  VOTE_POST,
  DELETE_POST,
  EDIT_POST
} from "../actions/types";

const posts = (state = {}, action) => {
  const { posts, category, postId, post } = action;

  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts
      };
    case GET_POSTS_BY_CATEGORY:
      return {
        ...state,
        posts,
        category
      };
    case GET_SINGLE_POST:
      return {
        ...state,
        post
      };
    case ADD_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [postId]: post
        }
      };
    case VOTE_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [postId]: post
        }
      };

    case DELETE_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [postId]: post
        }
      };
    case EDIT_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [postId]: post
        }
      };
    default:
      return state;
  }
};

export default posts;
