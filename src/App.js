import React, { useState } from 'react';
import ChipUpdate from './components/ChipUpdate';
import Demo from './components/Demo';
import ChipPractice from './components/SelectPractice';
// import Content from "./components/Selector2";
// import Modal from './components/Modal';
// import Selector from './components/selector';
import UserArray from './components/UserArray';
import WorkingEx from './components/WorkingEx';

const Button_Wrapper_Styles = {
  position: 'relative',
  zIndex: 1
}


function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="App">
      <div>
        <WorkingEx/>
      </div>
      {/* <div>
        Newest attempt
        <ChipUpdate/>
     
      </div> */}



      {/* <div>
        <ChipPractice/>
      </div> */}
      {/* <div>
        <h1>User Array Section</h1>
        <Demo/>
      <UserArray/>
      </div> */}

      {/* <div>
        <h1>Selector Section</h1>
      <Selector/>
   
      </div>

      <div style={Button_Wrapper_Styles}>
        <button onClick={() => setIsOpen(true)}>Open</button>
      </div>
      
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Ooooh Fancy
        <Content/>
      </Modal> */}
      
    </div>
  );
}

export default App;

