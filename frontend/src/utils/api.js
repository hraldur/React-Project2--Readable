import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/";
axios.defaults.headers.common["Authorization"] = "OK";

const api = {
  getCategories: () =>
    axios
      .get("categories")
      .then(response => response.data)
      .then(data => data),

  getPosts: () =>
    axios
      .get("posts")
      .then(response => response.data)
      .then(data => data),

  getPostsByCategory: category =>
    axios
      .get(`${category}/posts`)
      .then(response => response.data)
      .then(data => data),

  getSinglePost: postId =>
    axios
      .get(`posts/${postId}`)
      .then(response => response.data)
      .then(data => data),

  getComments: postId =>
    axios
      .get(`posts/${postId}/comments`)
      .then(response => response.data)
      .then(data => data),

  getSingleComment: commentId =>
    axios
      .get(`comments/${commentId}`)
      .then(response => response.data)
      .then(data => data),

  addPost: ({ id, timestamp, title, body, author, category }) =>
    axios
      .post("posts", {
        id,
        timestamp,
        title,
        body,
        author,
        category
      })
      .then(data => data),

  votePost: (postId, option) =>
    axios
      .post(`/posts/${postId}`, {
        option
      })
      .then(data => data),

  addComment: ({ id, timestamp, body, author, parentId }) =>
    axios
      .post("comments", {
        id,
        timestamp,
        body,
        author,
        parentId
      })
      .then(data => data),

  voteComment: (commentId, option) =>
    axios
      .post(`/comments/${commentId}`, {
        option
      })
      .then(data => data),

  deletePost: postId =>
    axios
      .delete(`/posts/${postId}`)
      .then(response => response.data)
      .then(data => data),

  deleteComment: commentId =>
    axios
      .delete(`/comments/${commentId}`)
      .then(response => response.data)
      .then(data => data),

  editPost: (postId, title, body) =>
    axios
      .put(`/posts/${postId}`, {
        title,
        body
      })
      .then(data => data),

  editComment: (commentId, timestamp, body) =>
    axios
      .put(`/comments/${commentId}`, {
        timestamp,
        body
      })
      .then(data => data)
};

export default api;
