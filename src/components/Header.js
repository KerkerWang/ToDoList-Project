import React from "react";
import { useNavigate } from "react-router";

const Header = ({ username, setUsername }) => {
  const navigate = useNavigate();
  const clearHandler = () => {
    localStorage.removeItem("nameOfTodoList");
    localStorage.removeItem("list");
    setUsername(null);
    navigate("/");
  };
  return (
    <div className="header">
      <div className="title">
        <div className="h1">
          <h1>{username}'s Todo List</h1>
          <button onClick={clearHandler}>Clear my data</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
