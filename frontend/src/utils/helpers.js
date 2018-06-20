import React from "react";
import ListPosts from "../components/Posts/ListPosts";


export function setTime(timestamp) {
  const date = new Date(timestamp);
  return date.toDateString();
}



export default function validatePosts(posts) {
  let validPosts = [];
  if (posts[Object.keys(posts).length - 1] === undefined) {
    let counter = 0;
    for (var key in posts) {
      if (posts[key] !== undefined) {
        validPosts[counter] = posts[key];
      }
      counter = counter + 1;
    }
  } else {
    validPosts = posts;
  }
  return <ListPosts posts={validPosts} />;
}
