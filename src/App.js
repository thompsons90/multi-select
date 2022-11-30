import React, { useState } from "react";
import Combo from "./components/Combo";
import Rebuild from "./components/Rebuild";
import Tag from "./components/Tag";
import Todo from "./dynamicAdd/Todo";
import SingleFree from "./singleName/SingleFree";
import SingleSelect from "./singleName/SingleSelect";
import MultiSelect from "./testCode/MultiSelect";

const Button_Wrapper_Styles = {
  position: "relative",
  zIndex: 1,
};

function App() {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <div
        className="workingMultiSelect"
        style={{ border: "solid 2px red", margin: "4px" }}
      >
        <MultiSelect />
      </div>

      <div
        className="controlled-input-container"
        style={{ border: "solid 2px blue", margin: "4px" }}
      >
        <Combo />
      </div>
      <div
        className="controlled-input-container"
        style={{ border: "solid 2px purple", margin: "4px" }}
      >
        <Rebuild />
      </div>
      <div style={{ border: "solid 2px green", margin: "4px" }}>
        <Tag />
      </div>
      <div style={{ border: "solid 2px orange", margin: "4px" }}>
        <SingleFree />
      </div>
      <div style={{ border: "solid 2px brown", margin: "4px" }}>
        <SingleSelect />
      </div>
      <div>
        <Todo />
      </div>
    </div>
  );
}

export default App;
