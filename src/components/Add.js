import React, { useState } from "react";

const Add = ({ list, setList }) => {
  const [thing, setThing] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const thingChangeHandler = (e) => {
    setThing(e.target.value);
  };
  const monthChangeHandler = (e) => {
    setMonth(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  const addHandler = (e) => {
    let form = e.target.parentElement;
    if (form.children[0].value == "")
      return window.alert("Please enter valid todo task.");
    if (form.children[1].value == "")
      return window.alert("Please enter valid month.");
    if (form.children[2].value == "")
      return window.alert("Please enter valid date.");

    if (month == 2 && (date == 30 || date == 31)) {
      window.alert("Please enter a valid date.");
    } else if (
      (month == 4 || month == 6 || month == 9 || month == 11) &&
      date == 31
    ) {
      window.alert("Please enter a valid date.");
    } else {
      const newTask = {
        thing: thing,
        month: month,
        date: date,
        done: "notYet",
        key: `${thing} at ${month}/${date}`,
        id: `${thing} at ${month}/${date}`,
      };
      const myList = JSON.parse(localStorage.getItem("list"));
      if (!myList) {
        localStorage.setItem("list", JSON.stringify([newTask]));
        setList(JSON.parse(localStorage.getItem("list")));
      } else {
        myList.push(newTask);
        localStorage.setItem("list", JSON.stringify(myList));
        setList(JSON.parse(localStorage.getItem("list")));
      }
    }

    form.children[0].value = "";
    form.children[1].value = "";
    form.children[2].value = "";
  };
  return (
    <div className="add">
      <div>
        <input onChange={thingChangeHandler} type="text" />
        <input
          onChange={monthChangeHandler}
          type="number"
          min="1"
          max="12"
          className="number"
        />
        <input
          onChange={dateChangeHandler}
          type="number"
          min="1"
          max="31"
          className="number"
        />
        <button onClick={addHandler}>Add into List</button>
      </div>
    </div>
  );
};

export default Add;
