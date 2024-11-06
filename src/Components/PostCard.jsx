import React from "react";

function PostCard({ title, body }) {
  return (
    <div className="PostCard">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}
export default PostCard;
