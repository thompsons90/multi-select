import React, { useState } from 'react';
import ChipUpdate from './components/ChipUpdate';
import Demo from './components/Demo';
// import Content from "./components/Selector2";
import Modal from './components/Modal';



const Button_Wrapper_Styles = {
  position: 'relative',
  zIndex: 1
}


function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="App">
      <div style={Button_Wrapper_Styles}>
        <button onClick={() => setIsOpen(true)}>Open</button>
      </div>
      
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Ooooh fancy modal ya got der don't ya know!
        <ChipUpdate/>
      </Modal> 
      <div>
        <h1>The one that works: (ChipUpdate)</h1>
        <ChipUpdate/>
      </div>

       <div>
        <h1>Working Select All Dropdown: (Demo)</h1>
        <Demo/>
      </div>      
    </div>
  );
}

export default App;

