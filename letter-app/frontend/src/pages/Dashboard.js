import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    api
      .get("/letters")
      .then((res) => setLetters(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <Link
        to="/editor"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 inline-block"
      >
        Create New Letter
      </Link>
      <ul className="mt-4">
        {letters.map((letter) => (
          <li key={letter.id} className="p-2 border-b">
            {letter.title} -{" "}
            <Link to={`/editor/${letter.id}`} className="text-blue-500">
              Edit
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
