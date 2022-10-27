import React, { useState } from "react";
import Combo from "./components/Combo";
import Todo from "./controledInput/Todo";
import StateCopy from "./testCode/ExCopy";

const Button_Wrapper_Styles = {
  position: "relative",
  zIndex: 1,
};

function App() {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <div className="workingStateCopy" style={{ border: "solid 2px red" }}>
        <p>Working State Copy:</p>
        <StateCopy />
      </div>

      <div className="todo-container">
        <Todo />
      </div>

      <div
        className="controlled-input-container"
        style={{ border: "solid 2px blue" }}
      >
        <Combo />
      </div>
    </div>
  );
}

export default App;
