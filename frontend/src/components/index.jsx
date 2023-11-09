import React from "react";
import Home from "./Home";
import HomeNext from "./homeNext";
import Footer from "./Footer";
import NavBar from "./NavBar";
import About from "./About";

function index() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Include your components here */}
        <Home />
        <HomeNext />
        {/* Add other components as needed */}
      </main>
    </div>
  );
}

export default index;
