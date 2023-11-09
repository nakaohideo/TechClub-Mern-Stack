import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

// import logo from "../images/logo.png";
import { hover } from "@testing-library/user-event/dist/hover";

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const isSamePage = location.pathname === "/";
  const linkId = isSamePage ? "predict" : "pre";

  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="p-8 nav bg-slate-900">
      <div className="flex items-center justify-between relative ">
        <div className="flex items-center">
          <h1 className="text-xl lg:text-2xl text-white font-poppins font-bold">
            CTC
          </h1>
          {/* <img src={logo} alt="Logo" className="w-20 h-15 mr-4" /> */}
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex space-x-4">
            <NavLink
              to="/Home"
              className={`relative w-fit text-white block font-semibold after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ${
                location.pathname === "/Home"
                  ? "text-white border-b-2 border-white "
                  : "opacity-100"
              }`}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={`relative w-fit text-white block font-semibold after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ${
                location.pathname === "/about"
                  ? "text-white border-b-2 border-white"
                  : "opacity-100"
              }`}
            >
              About
            </NavLink>
            <NavLink
              to="/news"
              className={`relative w-fit text-white block font-semibold after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ${
                location.pathname === "/news"
                  ? "text-blue-[#396E8D] border-b-2 border-white"
                  : "opacity-100"
              }`}
            >
              News
            </NavLink>
            <NavLink
              to="/faq"
              className={`relative w-fit text-white block font-semibold after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ${
                location.pathname === "/faq"
                  ? "text-blue-[#396E8D] border-b-2  border-white"
                  : "opacity-100"
              }`}
            >
              FAQ
            </NavLink>
          </div>
        </div>

        <div>
          <NavLink
            to="/contact"
            className={`bg-blue-500 p-3 text-white font-poppins font-semibold invisible lg:visible rounded hidden lg:block ${
              location.pathname === "/contact" ? "active" : ""
            }`}
          >
            Contact
          </NavLink>
        </div>
        <button className="text-white lg:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Add SVG content for the cross (X) shape */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Add SVG content for the hamburger icon */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden m-auto bg-slate-900 h-screen">
          <div className="flex flex-col items-center text-start justify-center  text-white font-semibold text-5xl gap-10">
            <NavLink
              to="/Home"
              className={`relative text-white block font-semibold ...`}
              onClick={handleLinkClick} // Close the menu when the link is clicked
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={`relative  text-white block font-semibold ...`}
              onClick={handleLinkClick} // Close the menu when the link is clicked
            >
              About
            </NavLink>
            <NavLink
              to="/news"
              className="relative w-fit text-white block font-semibold after:block after:content"
              onClick={handleLinkClick}
            >
              News
            </NavLink>
            <NavLink
              to="/contact"
              className={`relative text-white block font-semibold ...`}
              onClick={handleLinkClick} // Close the menu when the link is clicked
            >
              Contact
            </NavLink>
            <NavLink
              to="/faq"
              className={`relative text-white block font-semibold ...`}
              onClick={handleLinkClick} // Close the menu when the link is clicked
            >
              FAQ
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
