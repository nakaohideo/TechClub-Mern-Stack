import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const ShowPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/Post")
      .then((response) => {
        setPosts(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleDeletePost = (postId) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      axios
        .delete(`http://localhost:5000/Post/${postId}`)
        .then(() => {
          // Reload the posts after deletion
          axios
            .get("http://localhost:5000/Post")
            .then((response) => {
              setPosts(response.data.data);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl my-4">Show Posts</h1>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.isArray(posts) &&
            posts.map((post) => (
              <div
                key={post._id}
                className="p-4 border border-gray-300 rounded-lg shadow-lg"
              >
                <div className="mb-4 text-lg font-semibold">{post.title}</div>
                <div className="mb-4 text-gray-600">{post.content}</div>
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="text-sm text-gray-500">
                  {format(new Date(post.createdAt), "MMMM d, yyyy")}
                </div>
                <div className="flex">
                  <Link
                    to={`/edit/${post._id}`}
                    className="text-blue-500 underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDeletePost(post._id)}
                    className="text-red-500 underline ml-2 cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ShowPosts;
