import React, { useState } from "react";
import Combo from "./components/Combo";
import Rebuild from "./components/Rebuild";
import Tag from "./components/Tag";
import Todo from "./dynamicAdd/Todo";
import SingleFree from "./singleName/SingleFree";
import SingleSelect from "./singleName/SingleSelect";
import MultiSelect from "./testCode/MultiSelect";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import BasicTabs from "./components/Appbar";
import TabsTwo from "./tabs/TabsTwo";
import TabExample from "./tabs/Tabs";
import { CopyCheck } from "./a1Check/CopyCheck";
import { CheckOne } from "./a1Check/CheckOne";
import { CheckTwo } from "./a1Check/CheckTwo";
import NewCheck from "./a1Check/NewCheck";
import Notifications from "./Notifications";
import HoursCurrency from "./Hours";
import { ModalComp } from "./modal/ModalComp";

const Button_Wrapper_Styles = {
  position: "relative",
  zIndex: 1,
};

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <div>
        <BasicTabs />
      </div>

      <div>
        <TabExample />
      </div>

      <div>
        <ModalComp />
      </div>
      {/* <div>
        <h1>Notifications</h1>
        <p>Set up automatic schedule emails and time tracking reminders.</p>
        <Notifications />
      </div>
      <div>
        <h1>Hours & currency</h1>
        <p>Update your team's scheduled working hours.</p>
        <HoursCurrency />
      </div> */}
      {/* 
      <button onClick={() => setShow(!show)}>Dropdowns</button>
      {show && (
        <>
          <div>
            <NewCheck />
          </div>

          <div>
            <CopyCheck />
          </div>

        
        </>
      )}
      <button onClick={() => setShow(!show)}>Dropdowns</button>
      {show && (
        <>
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

          <div style={{ border: "solid 2px green", margin: "4px" }}>
            <Tag />
          </div>
          <div style={{ border: "solid 2px orange", margin: "4px" }}>
            <SingleFree />
          </div>
          <div style={{ border: "solid 2px brown", margin: "4px" }}>
            <SingleSelect />
          </div>
        </>
      )} */}
    </div>
  );
}

export default App;
