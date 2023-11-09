import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex mb-4 space-x-4">
          <NavLink
            to="/Home"
            className={`relative text-white block font-semibold ...`}
            // Close the menu when the link is clicked
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={`relative  text-white block font-semibold ...`}
            // Close the menu when the link is clicked
          >
            About
          </NavLink>
          <NavLink
            to="/news"
            className={`relative w-fit text-white block font-semibold after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left
            }`}
          >
            News
          </NavLink>
          <NavLink
            to="/contact"
            className={`relative text-white block font-semibold ...`}
            // Close the menu when the link is clicked
          >
            Contact
          </NavLink>
          <NavLink
            to="/faq"
            className={`relative text-white block font-semibold ...`}
            // Close the menu when the link is clicked
          >
            FAQ
          </NavLink>
        </div>
        <p className="text-sm">&copy; 2023 CTC_Web. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
