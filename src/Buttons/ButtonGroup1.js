import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

const ButtonGroup1 = () => {
  const frequency = [
    { id: "Never", isClicked: false },
    { id: "Daily", isClicked: false },
    { id: "Weekly", isClicked: false },
  ];

  const [selected, setSelected] = useState("never");

  const handleChange = (event, newSelected) => {
    setSelected(newSelected);
  };
  // console.log(selected);
  return (
    <>
      <p>Frequency</p>
      <ToggleButtonGroup
        color="primary"
        value={selected}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="never">never</ToggleButton>
        <ToggleButton value="daily">daily</ToggleButton>
        <ToggleButton value="weekly">weekly</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};
export default ButtonGroup1;

// {selected.map((data) => (
//   <ToggleButtonGroup
//     value={selected}
//     variant="outlined"
//     aria-label="outlined primary button group"
//   >
//     <ToggleButton
//       onClick={(e) => handleClick(data, e)}
//       value={data.id}
//       style={{
//         variant: data.isClicked ? "contained" : "outlined",
//         border: data.isClicked ? "2px solid red" : "2px solid green",
//         margin: data.isClicked ? "3px" : "2px",
//       }}
//     >
//       {data.id}
//       {/* ABC */}
//       {console.log(`DATA: ${data}`)}
//     </ToggleButton>
//   </ToggleButtonGroup>
// ))}
