import React, { useState } from "react";

const Todo = () => {
  const [list, setList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (task) => {
    let newerTodo = { task: task, done: false };
    setList([...list, newerTodo]);
    setNewTodo("");
  };
  return (
    <>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button onClick={() => addTodo(newTodo)}>Add User</button>
      <ul>
        {list.map((user, i) => (
          <li key={i}>
            <span>{user.task}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
