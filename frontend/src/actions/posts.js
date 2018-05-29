import api from "../utils/api";
export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_BY_CATEGORY = "GET_POSTS_BY_CATEGORY";
export const GET_SINGLE_POST = "GET_SINGLE_POST";

// export const ADD_POST = "ADD_POST";
// export const VOTE_POST = "VOTE_POST";
// export const DELETE_POST = "DELETE_POST";
// export const EDIT_POST = "EDIT_POST";

export const getPosts = posts => {
  return {
    type: GET_POSTS,
    posts
  };
};

export const asyncGetPosts = dispatch => () => {
  api.getPosts().then(posts => dispatch(getPosts(posts)));
};

export const getPostsByCategory = (posts, category) => {
  return {
    type: GET_POSTS_BY_CATEGORY,
    posts: posts,
    category: category
  };
};

export const asyncGetPostsByCategory = (dispatch, category) => () => {
  api
    .getPostsByCategory(category)
    .then(posts => dispatch(getPostsByCategory(posts, category)));
};

export const getSinglePost = (post, postId) => {
  console.log(post, postId);
  return {
    type: GET_SINGLE_POST,
    post: post,
    postId: postId
  };
};

export const asyncGetSinglePost = (dispatch, postId) => () => {
  api.getSinglePost(postId).then(post => dispatch(getSinglePost(post, postId)));
};
