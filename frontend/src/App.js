import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar'
import "./App.css";

import ShowPosts from "./components/Admin/Show";
import CreatePost from "./components/Admin/CreatePost";
import EditPost from "./components/Admin/EditPost";
import UserShow from './components/ShowPosts'
import Home from './components/Home'
import Index from './components/index'
import Contact from './components/contact'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
         <Route path="/news" element={<UserShow />} />
        <Route path="/admin" element={<ShowPosts />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/edit/:postId" element={<EditPost />} />
      </Routes>
    </div>
  );
}

export default App;
