import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { FaThumbsUp, FaComment } from "react-icons/fa"; // Import like and comment icons

const ShowPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [commentInputs, setCommentInputs] = useState({});

  // State to track likes for each post
  const [likes, setLikes] = useState({});

  // Function to handle liking a post
  // Function to handle liking a post
  const handleLike = (postId) => {
    axios
      .post(`https://ctc-website-server-api.onrender.com/Post/${postId}/like`)
      .then(() => {
        loadPosts(); // Reload posts after liking a post
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCommentToggle = (postId) => {
    setCommentInputs((prevCommentInputs) => ({
      ...prevCommentInputs,
      [postId]: !prevCommentInputs[postId], // Toggle the input field
    }));
    setCommentText(""); // Clear the comment input field
  };

  const loadPosts = () => {
    axios
      .get("https://ctc-website-server-api.onrender.com/Post")
      .then((response) => {
        setPosts(response.data.data);
        setLikes(response.data.likes || {});
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    // Function to load posts from the server
    loadPosts(); // Load posts when the component mounts
  }, []);

  // Function to handle commenting on a post
  const handleComment = (postId, commentText) => {
    axios
      .post(
        `https://ctc-website-server-api.onrender.com/Post/${postId}/comment`,
        {
          text: commentText,
        }
      )
      .then((response) => {
        const updatedPosts = posts.map((p) =>
          p._id === postId
            ? {
                ...p,
                comments: [...p.comments, response.data],
              }
            : p
        );

        setPosts(updatedPosts);
        // setPosts((prevPosts) => prevPosts.map((p) => (p._id === postId ? { ...p, comments: [...p.comments, response.data] } : p)));
        setCommentText("");
        loadPosts(); // Reload posts after adding a comment
      })
      .catch((error) => {
        console.log(error);
      });

    setCommentInputs({ ...commentInputs, [postId]: false });
  };

  const handlePostComment = (postId) => {
    if (!commentText) {
      // Check if the comment text is not empty
      alert("Please enter a comment");
    } else {
      handleComment(postId, commentText);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl my-4 font-poppins font-bold text-center mb-5">
        News
      </h1>
      {loading ? (
        <div className="text-center h-screen">Loading...</div>
      ) : (
        <div className="flex flex-col justify-center items-center m-auto gap-5 w-full lg:w-2/4 border-b-2 border-gray-500">
          {Array.isArray(posts) &&
            posts
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort posts by createdAt in descending order
              .map((post) => (
                <div
                  key={post._id}
                  className="p-5 border-2 border-gray-100"
                  style={{ width: "100%" }}
                >
                  <div className="mb-4 text-[#242424] text-4xl font-bold text-start capitalize font-poppins">
                    {post.title}
                  </div>
                  <div className="text-sm mb-5 text-gray-500 text-start font-poppins">
                    {format(new Date(post.createdAt), "MMMM d, yyyy")}
                  </div>
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full flex justify-center items-start m-auto"
                      style={{ marginBottom: "20px" }}
                    />
                  )}
                  <div className="whitespace-pre-wrap text-gray-600 mb-5">
                    {post.content}
                  </div>
                  {/* ... (other post information) ... */}
                  {/* Like and Comment buttons */}
                  <div className="flex justify-around items-center ml-2 bg-slate-100 p-5">
                    <button
                      onClick={() => handleLike(post._id)}
                      className="text-green-500 font-semibold cursor-pointer"
                    >
                      <FaThumbsUp />
                      {post.likes}
                    </button>
                    <button
                      className="text-blue-500 font-semibold cursor-pointer ml-2"
                      onClick={() => handleCommentToggle(post._id)}
                    >
                      <FaComment />
                      {commentInputs[post._id] && (
                        <span className="ml-1 hidden">
                          {post.comments.length}
                        </span>
                      )}
                      {post.comments.length}
                    </button>
                  </div>
                  {/* Display comments input field only when clicked */}
                  {commentInputs[post._id] && (
                    <div className="post w-full flex justify-between p-5 gap-5">
                      <input
                        className="w-full p-5 outline-none border-b-2 border-blue-400 "
                        type="text"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="Write a comment..."
                      />
                      <button
                        className="bg-blue-500 p-5 rounded text-white font-semibold hover:bg-blue-700"
                        onClick={() => handlePostComment(post._id)}
                      >
                        Post
                      </button>
                    </div>
                  )}
                  {/* Display comments below the post */}
                  {commentInputs[post._id] && (
                    <div className="mt-2 w-full h-[400px] overflow-scroll p-5 border-2 border-gray-300">
                      {post.comments.length > 0 && (
                        <div className="text-gray-900 font-poppins w-full bg-slate-200 p-5">
                          <strong>Comments:</strong>
                          {post.comments.map((comment, index) => (
                            <div
                              key={index}
                              className="comment flex justify-between p-2 rounded text-start items-start w-ful"
                            >
                              <p className="text-start bg-white w-full p-2 text-[12px] flex justify-between overflow-scroll h-[50px]">
                                {comment.text}
                                <span className="text-[10px] text-gray-400">
                                  {format(
                                    new Date(post.createdAt),
                                    "MMMM d, yyyy"
                                  )}
                                </span>
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
        </div>
      )}
    </div>
  );
};

export default ShowPosts;
