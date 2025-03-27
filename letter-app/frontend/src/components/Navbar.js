import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const auth = useAuth();
  if (!auth) {
    return <div className="p-4 bg-blue-500 text-white">Loading...</div>; // ✅ Handle undefined auth
  }

  const { user, logout } = auth;
  return (
    <nav className="p-4 bg-blue-500 text-white flex justify-between">
      <h1 className="text-lg font-bold">Letter Editor</h1>
      <div>
        {user ? (
          <>
            <span className="mr-4">Hello, {user.displayName}</span>
            <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="bg-green-500 px-4 py-2 rounded">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
