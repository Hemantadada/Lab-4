import { useState, useEffect } from "react";
import PostsContainer from "./PostsContianer";
import PostForm from "./PostForm";

function FakeApiApp() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        setData(posts);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const handleAddPost = () => {
    const post = { ...newPost, id: data.length + 1 };
    setData([post, ...data]);
    setNewPost({ title: "", body: "" });
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
