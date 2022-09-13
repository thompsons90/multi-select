import React, { useState } from 'react';
import Selector from "./components/Selector";
import Content from "./components/Selector2";
import Modal from './components/Modal';

const Button_Wrapper_Styles = {
  position: 'relative',
  zIndex: 1
}

const Other_Content_Styles = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'red',
  padding: '10px'
}

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="App">
      <Selector/>
      {/* <Content/> */}

      <div style={Button_Wrapper_Styles}>
        <button onClick={() => setIsOpen(true)}>Open</button>
      </div>
      
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Ooooh Fancy
        <Content/>
      </Modal>
      <div style={Other_Content_Styles}>Other</div>
    </div>
  );
}

export default App;
