import { useState, useEffect } from "react";
import PostsContainer from "./PostsContianer";
import PostForm from "./PostForm";

function FakeApiApp() {
  const [data, setData] = useState([]); // Holds posts from API and new posts
  const [loading, setLoading] = useState(true); // Tracks loading state
  const [newPost, setNewPost] = useState({ title: "", body: "" }); // Tracks new post

  // Fetch posts from API on component mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        setData(posts); // Set data to fetched posts
        setLoading(false); // Set loading to false
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  // Handle new post submission
  const handleAddPost = () => {
    // Create a new post object
    const post = { ...newPost, id: data.length + 1 }; // Create unique ID
    setData([post, ...data]); // Add new post at the beginning of the array
    setNewPost({ title: "", body: "" }); // Reset the form
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <PostForm
            newPost={newPost}
            setNewPost={setNewPost}
            handleAddPost={handleAddPost}
          />
          <PostsContainer posts={data} />
        </>
      )}
    </div>
  );
}
export default FakeApiApp;
