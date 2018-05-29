import {
  GET_POSTS,
  GET_POSTS_BY_CATEGORY,
  GET_SINGLE_POST,
} from "../actions/posts";

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
    default:
      return state;
  }
};

export default posts;
