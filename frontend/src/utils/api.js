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
      .then(data => data)
};

export default api;
