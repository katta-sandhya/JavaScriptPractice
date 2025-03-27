import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold">Welcome to the Letter Editor</h1>
      <p className="mt-4">Create, edit, and save letters to Google Drive.</p>
      <Link
        to="/dashboard"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 inline-block"
      >
        Go to Dashboard
      </Link>
    </div>
  );
};

export default Home;
