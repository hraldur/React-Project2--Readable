import api from "../utils/api";
import {
  GET_POSTS,
  GET_POSTS_BY_CATEGORY,
  GET_SINGLE_POST,
  ADD_POST,
  VOTE_POST,
  DELETE_POST,
  EDIT_POST
} from "./types";

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
  return {
    type: GET_SINGLE_POST,
    post: post,
    postId: postId
  };
};

export const asyncGetSinglePost = (dispatch, postId) => () => {
  api.getSinglePost(postId).then(post => dispatch(getSinglePost(post, postId)));
};

export const addPost = ({ newPost }) => {
  return {
    type: ADD_POST,
    post: newPost
  };
};

export const asyncAddPost = dispatch => newPost => {
  api.addPost(newPost).then(post => dispatch(addPost(post)));
};

export const votePost = status => {
  return {
    type: VOTE_POST
  };
};

export const asyncVotePost = dispatch => (postId, option) => {
  api.votePost(postId, option).then(status => dispatch(votePost(status)));
};

export const deletePost = post => {
  return {
    type: DELETE_POST
  };
};

export const asyncDeletePost = dispatch => postId => {
  api.deletePost(postId).then(post => dispatch(votePost(post)));
};

export const editPost = status => {
  return {
    type: EDIT_POST
  };
};

export const asyncEditPost = dispatch => (postId, title, body) => {
  api.editPost(postId, title, body).then(status => dispatch(editPost(status)));
};
