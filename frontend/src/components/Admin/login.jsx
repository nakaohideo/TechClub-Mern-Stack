import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa"; // Importing icons from react-icons
import { correctUsername, correctPassword } from "./credentials.js";
import CreatePosts from "./CreatePost.jsx";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    // Check if the entered username and password are correct
    if (username === correctUsername && password === correctPassword) {
      // Redirect to another page on successful login
      window.location.href = "admin";
    } else {
      // Display an error message for incorrect credentials
      setErrorMessage("Username and password are incorrect. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Login Page</h1>
        <div className="mb-4">
          <label className="block text-gray-600">Username:</label>
          <div className="relative">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute right-3 top-2">
              <FaUser />
            </span>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Password:</label>
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute right-3 top-2">
              <FaLock />
            </span>
          </div>
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
