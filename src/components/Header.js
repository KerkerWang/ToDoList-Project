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
      <h1>{username}'s Todo List</h1>
      <div className="clear">
        <button onClick={clearHandler}>Clear my data</button>
      </div>
    </div>
  );
};

export default Header;
