import React from "react";

export default function ListSingleComment({ comment, commentId }) {
  return (
    <div>
      {typeof comment !== "undefined" && (
        <div>
          <h3>{comment.author}</h3>

          <p>{comment.body}</p>
        </div>
      )}
    </div>
  );
}
