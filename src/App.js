import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router";
import Header from "./components/Header";
import Welcome from "./pages/Welcome";
import ToDoList from "./pages/ToDoList";

const App = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  useEffect(() => {
    const getItemFromLocal = JSON.parse(localStorage.getItem("nameOfTodoList"));
    if (!getItemFromLocal) {
      navigate("/");
    } else if (getItemFromLocal) {
      setUsername(JSON.parse(localStorage.getItem("nameOfTodoList")).username);
      navigate("/todolist");
    }
  }, []);

  return (
    <div>
      {username && <Header username={username} setUsername={setUsername} />}
      <Routes>
        <Route
          path="/"
          element={<Welcome username={username} setUsername={setUsername} />}
        ></Route>
        <Route
          path="/todolist"
          element={<ToDoList username={username} setUsername={setUsername} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
