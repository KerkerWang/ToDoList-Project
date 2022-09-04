import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Add from "../components/Add";
import Task from "../components/Task";

const ToDoList = ({ username, setUsername }) => {
  const navigate = useNavigate();

  const [list, setList] = useState(JSON.parse(localStorage.getItem("list")));

  const sortHandler = (e) => {
    const sortedArr = mergeSort(JSON.parse(localStorage.getItem("list")));
    localStorage.setItem("list", JSON.stringify(sortedArr));
    const divSort = e.target.parentElement;
    const divTodoList = divSort.parentElement;
    let len = divTodoList.children[2].children.length;
    for (let i = 0; i < len; i++) {
      divTodoList.children[2].children[0].remove();
    }
    navigate("/");
  };

  function mergeTime(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (Number(arr1[i].month) < Number(arr2[j].month)) {
        result.push(arr1[i]);
        i++;
      } else if (Number(arr1[i].month) > Number(arr2[j].month)) {
        result.push(arr2[j]);
        j++;
      } else if (Number(arr1[i].month) == Number(arr2[j].month)) {
        if (Number(arr1[i].date) > Number(arr2[j].date)) {
          result.push(arr2[j]);
          j++;
        } else {
          result.push(arr1[i]);
          i++;
        }
      }
    }

    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }

    return result;
  }

  function mergeSort(arr) {
    if (arr.length == 1) {
      return arr;
    } else {
      let middle = Math.floor(arr.length / 2);
      let left = arr.slice(0, middle);
      let right = arr.slice(middle, arr.length);
      return mergeTime(mergeSort(left), mergeSort(right));
    }
  }

  return (
    <div className="todolist">
      <Add list={list} setList={setList} />
      <div className="sort">
        <button onClick={sortHandler}>Sort by time</button>
      </div>
      <div className="tasks">
        {list &&
          list.map((n) => <Task task={n} key={n.key} id={n.key} list={list} />)}
      </div>
    </div>
  );
};

export default ToDoList;
