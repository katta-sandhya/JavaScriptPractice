import React, { useState, useEffect } from "react";
import axios from "axios";
//import "./App.css";
import "./Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (loggedUser) setUser(loggedUser);
  }, []);

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <div
      className="dashboard"
      style={{ backgroundColor: "#D32F2F", color: "white", padding: "20px" }}
    >
      <h1>Mackinlay Learning Hub - Student Dashboard</h1>
      {user ? <h2>Welcome, {user.name}</h2> : <h2>Please log in</h2>}
      <h3>To-Do List</h3>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
