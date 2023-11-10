import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";

const EditPost = () => {
  const { postId } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const [post, setPost] = useState({
    title: "",
    content: "",
    image: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://ctc-website-server-api.onrender.com/Post/${postId}`)
      .then((response) => {
        setPost(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [postId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleUpdatePost = () => {
    axios
      .put(`https://ctc-website-server-api.onrender.com/Post/${postId}`, post)
      .then(() => {
        enqueueSnackbar("Post updated successfully", { variant: "success" });
      })
      .catch((error) => {
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  const handleDeletePost = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      axios
        .delete(`https://ctc-website-server-api.onrender.com/Post/${postId}`)
        .then(() => {
          enqueueSnackbar("Post deleted successfully", { variant: "success" });
          // Redirect to the post list or any other appropriate page
        })
        .catch((error) => {
          enqueueSnackbar("Error deleting post", { variant: "error" });
          console.log(error);
        });
    }
  };

  return (
    <div className="h-screen w-10/12 m-auto">
      <div className="p-4 w-full">
        <h1 className="text-3xl my-4 font-poppins font-bold text-center">
          Edit Post
        </h1>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 mx-auto">
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">Title</label>
              <input
                type="text"
                name="title"
                value={post.title}
                onChange={handleInputChange}
                className="border-2 border-gray-500 px-4 py-2 w-full"
              />
            </div>
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">Content</label>
              <textarea
                type="text"
                name="content"
                value={post.content}
                onChange={handleInputChange}
                className="border-2 h-[200px]  border-gray-500 px-4 py-2 w-full resize-none"
              />

              {/* <textarea
              value={post.content}
              onChange={handleInputChange}
              style={{
                border: "2px solid gray",
                padding: "8px",
                width: "100%",
                resize: "none",
                height: "200px",
              }}
            /> */}
            </div>
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">Image URL</label>
              <input
                type="url"
                name="image"
                value={post.image}
                onChange={handleInputChange}
                className="border-2 border-gray-500 px-4 py-2 w-full"
                placeholder="Enter Image URL"
              />
            </div>
            <button className="p-2 bg-sky-300 m-4" onClick={handleUpdatePost}>
              Update
            </button>
            <button
              className="p-2 bg-red-500 text-white m-4"
              onClick={handleDeletePost}
            >
              Delete
            </button>
            <Link to="/edit" className="text-blue-500 underline">
              Back to Posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditPost;
