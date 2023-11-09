import React, { useState } from "react";
// import BackButton from "../components/BackButton";
import Spinner from "../Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreatePosts = () => {
  const [title, setTitle] = useState("");
  const [content, setcontent] = useState("");
  const [image, setimage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSavePost = () => {
    const data = {
      title,
      content,
      image,
    };
    setLoading(true);
    axios
      .post("http://localhost:5000/Post", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Post Created successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      {/* <BackButton /> */}
      <h1 className="text-3xl my-4">Create Post</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Image URL</label>
          <input
            type="url"
            value={image}
            onChange={(e) => setimage(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full"
            placeholder="Enter Image URL"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">content</label>
          <textarea
            value={content}
            onChange={(e) => setcontent(e.target.value)}
            style={{
              border: "2px solid gray",
              padding: "8px",
              width: "100%",
              resize: "none",
              height: "200px",
              whiteSpace: "pre-wrap",
            }}
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleSavePost}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreatePosts;
