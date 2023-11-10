import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { correctUsername, correctPassword } from "./credentials.js";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(null);

  const handleLogin = () => {
    // Check if the username and password are correct
    const isValidCredentials =
      username === correctUsername && password === correctPassword;

    if (isValidCredentials) {
      // Set login success state to true
      setLoginSuccess(true);
    } else {
      // Set login success state to false
      setLoginSuccess(false);
    }
  };

  return (
    <div className="h-screen">
      <div className="max-w-md mx-auto mt-20 p-6 bg-white border rounded shadow-md">
        <h2 className="text-2xl mb-4">Login</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <FaUser className="inline-block mr-2" />
            Username:
          </label>
          <input
            type="text"
            className="w-full border rounded py-2 px-3"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <FaLock className="inline-block mr-2" />
            Password:
          </label>
          <input
            type="password"
            className="w-full border rounded py-2 px-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex justify-around items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogin}
          >
            Login
          </button>

          {loginSuccess && (
            <div className="mt-4">
              <p className="text-green-600">Login successful!</p>
              <Link to="/admin" className="text-blue-500 hover:underline">
                Go to Admin Dashboard
              </Link>
            </div>
          )}

          {!loginSuccess && loginSuccess !== null && (
            <p className="text-red-600 mt-4">
              Username and password are incorrect. Please try again.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
