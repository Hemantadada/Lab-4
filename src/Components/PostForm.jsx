import React from "react";

function PostForm({ newPost, setNewPost, handleAddPost }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <form
        className="PostForm"
        onSubmit={(e) => {
          e.preventDefault();
          handleAddPost();
        }}
      >
        <strong>
          <h2>Post Form</h2>
        </strong>
        <input
          className="input"
          type="text"
          name="title"
          placeholder="Title"
          value={newPost.title}
          onChange={handleChange}
        />
        <input
          className="input"
          type="text"
          name="body"
          placeholder="Body"
          value={newPost.body}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default PostForm;
