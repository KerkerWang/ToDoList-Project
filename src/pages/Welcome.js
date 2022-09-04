import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Welcome = ({ username, setUsername }) => {
  const navigate = useNavigate();
  const [nameInput, setNameInput] = useState(null);
  useEffect(() => {
    if (username) {
      navigate("/todolist");
    }
  }, []);
  const nameChangeHandler = (e) => {
    setNameInput(e.target.value);
  };
  const submitHandler = () => {
    localStorage.setItem(
      "nameOfTodoList",
      JSON.stringify({ username: nameInput })
    );
    setUsername(JSON.parse(localStorage.getItem("nameOfTodoList")).username);
    window.alert("Now you're redirected to ToDo List page.");
    navigate("/todolist");
  };

  return (
    <div className="welcome" style={{ height: "100vh" }}>
      <div>
        <h3>Please enter your name!</h3>
        <div className="nameContainer">
          <input onChange={nameChangeHandler} type="text" />
          <button onClick={submitHandler}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
