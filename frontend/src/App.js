import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import ShowPosts from "./components/Admin/Show";
import CreatePost from "./components/Admin/CreatePost";
import EditPost from "./components/Admin/EditPost";
import UserShow from "./components/ShowPosts";
import Home from "./components/Home";
import Index from "./components/index";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Login from "./components/Admin/login";
import AdminDashboard from "./components/Admin/AdminDashboard";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Home" element={<Index />} />
        <Route path="/news" element={<UserShow />} />
        <Route path="/edit" element={<ShowPosts />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/edit/:postId" element={<EditPost />} />
        <Route path="/About" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
