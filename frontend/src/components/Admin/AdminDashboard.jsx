import React from "react";
import { FaEdit, FaPlus } from "react-icons/fa"; // Importing icons from react-icons
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <div className="mb-4">
          <Link
            to="/create"
            className="flex items-center justify-between bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            <span>Create Post</span>
            <FaPlus />
          </Link>
        </div>
        <div className="mb-4">
          <Link
            to="/edit"
            className="flex items-center justify-between bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
          >
            <span>Edit Post</span>
            <FaEdit />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
