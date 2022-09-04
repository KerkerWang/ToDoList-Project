import React from "react";

const Task = ({ task, list }) => {
  const doneHandler = (e) => {
    let divDone = e.target.parentElement;
    let myList = JSON.parse(localStorage.getItem("list"));
    myList.forEach((item) => {
      if (task.id === item.id) {
        if (item.done === "alreadyDone") {
          divDone.classList.remove("alreadyDone");
          divDone.classList.add("notYet");
          item.done = "notYet";
          localStorage.setItem("list", JSON.stringify(myList));
        } else if (item.done === "notYet") {
          divDone.classList.remove("notYet");
          divDone.classList.add("alreadyDone");
          item.done = "alreadyDone";
          localStorage.setItem("list", JSON.stringify(myList));
        }
      }
    });
  };

  const removeHandler = (e) => {
    let todoItem = e.target.parentElement;
    todoItem.style.animation = "scaleDown 0.2s forwards";
    todoItem.addEventListener("animationend", () => {
      let myList = JSON.parse(localStorage.getItem("list"));
      myList.forEach((item, index) => {
        if (task.id === item.id) {
          myList.splice(index, 1);
          localStorage.setItem("list", JSON.stringify(myList));
          todoItem.remove();
        }
      });
    });
  };
  return (
    <div className="task">
      <div className={task.done}>
        <p className="thing">{task.thing}</p>
        <p className="month">{task.month}/</p>
        <p className="date">{task.date}</p>
        <button onClick={doneHandler} className="done">
          Done
        </button>
        <button onClick={removeHandler} className="remove">
          Remove
        </button>
      </div>
    </div>
  );
};

export default Task;
