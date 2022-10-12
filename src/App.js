import React, { useState } from "react";
import ChipUpdate from "./components/ChipUpdate";
import Combo from "./components/Combo";
import Demo from "./components/Demo";
// import Content from "./components/Selector2";
import Modal from "./components/Modal";
// import SelectAllChips from './components/SelectAllChips';
// import SelectAllParent from './components/SelectAllParent';

const Button_Wrapper_Styles = {
  position: "relative",
  zIndex: 1,
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <div style={Button_Wrapper_Styles}>
        <button onClick={() => setIsOpen(true)}>Open</button>
      </div>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Ooooh fancy modal ya got der don't ya know!
        <ChipUpdate />
      </Modal>
      <div>
        <Combo />
      </div>
    </div>
  );
}

export default App;
