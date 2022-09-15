import React, { useState } from 'react';
import Content from "./components/Selector2";
import Modal from './components/Modal';
import Selector from './components/selector';
import UserArray from './components/UserArray';

const Button_Wrapper_Styles = {
  position: 'relative',
  zIndex: 1
}


function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="App">
      <div>
        <h1>User Array Section</h1>
      <UserArray/>
      </div>

      <div>
        <h1>Selector Section</h1>
      <Selector/>
      {/* <Content/> */}
      </div>

      <div style={Button_Wrapper_Styles}>
        <button onClick={() => setIsOpen(true)}>Open</button>
      </div>
      
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Ooooh Fancy
        <Content/>
      </Modal>
      
    </div>
  );
}

export default App;

