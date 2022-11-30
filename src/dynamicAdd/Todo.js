import React, { useState } from "react";

const Todo = () => {
  const [list, setList] = useState([
    { id: 1, position: "Manager" },
    { id: 2, position: "UX Designer" },
    { id: 3, position: "Frontend" },
    { id: 4, position: "Backend" },
    { id: 5, position: "Associate" },
  ]);
  const [newPosition, setNewPosition] = useState("");
  const addPosition = (title) => {
    let newerPosition = { position: title };
    setList([...list, newerPosition]);
    setNewPosition("");
  };
  // console.log(list);
  return (
    <>
      <h1>Todo</h1>
      {list.map((data) => (
        <ul key={data.id}>
          <li>{data.position}</li>
        </ul>
      ))}
      <input
        type="text"
        value={newPosition}
        onChange={(e) => {
          setNewPosition(e.target.value);
        }}
      ></input>
      <button onClick={() => addPosition(newPosition)}>Add</button>
    </>
  );
};
export default Todo;
