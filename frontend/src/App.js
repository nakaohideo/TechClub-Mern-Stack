import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ShowPosts from "./Admin/Show";
import CreatePost from "./Admin/CreatePost";
import EditPost from "./Admin/EditPost";

function App() {
  return (
    <div className="App bg-black">
      <Routes>
        <Route path="/" element={<ShowPosts />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/edit/:postId" element={<EditPost />} />
      </Routes>
    </div>
  );
}

export default App;
