import React, { useEffect, useState } from "react";
import { CheckBox, CssTwoTone } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { current } from "@reduxjs/toolkit";

// assign default time/schedule value to group/country
// dropdown for profile/shift (US, India, etc.) then this overrides profile
const timeArray = [
  { id: "Sunday", isChecked: false, hours: 0 },
  { id: "Monday", isChecked: false, hours: 0 },
  { id: "Tuesday", isChecked: false, hours: 0 },
  { id: "Wednesday", isChecked: false, hours: 0 },
  { id: "Thursday", isChecked: false, hours: 0 },
  { id: "Friday", isChecked: false, hours: 0 },
  { id: "Saturday", isChecked: false, hours: 0 },
];

const NewCheck = () => {
  const [timeAssignment, setTimeAssignment] = useState(timeArray);

  // if the box is checked, show the time text field w/a default value
  // if the time text field is set to 0, remove the check from box
  // if data.isChecked === true && data.hours > 0
  // need an else if
  // leave intial value to
  // console.log(timeAssignment);
  const handleCheckboxChange = (data, e) => {
    // console.log(`first`);
    // console.log(`EVENT: ${e.target.value} ID: ${data.id}`);
    setTimeAssignment(
      timeAssignment.map((checked) => {
        if (checked.id === data.id) {
          // console.log(`second`);
          return {
            ...checked,
            isChecked: !data.isChecked,
          };
        } else {
          // console.log(`third`);
          return checked;
        }
      })
    );
    // checkboxReaction();
  };

  const checkboxReaction = (e) => {
    timeAssignment.map((data) => {
      if (data.isChecked === true) {
        // console.log(`DATA:  ${data.id} ${data.isChecked} ${data.hours} `);
      }
    });
    // console.log(`DATA:  ${data.id} ${data.isChecked} ${data.hours} `);
  };
  checkboxReaction();
  // timeAssignment.map((checked) => {
  //   console.log(
  //     `######## CHECKED: ${checked.id} ${checked.isChecked} ${checked.hours} DATA: ${data.id} ${data.isChecked} ${data.hours} `
  //   );
  //   if (data.isChecked === false) {
  //     console.log((data.hours = 8));
  //     if (checked.id === data.id) {
  //     return { ...data, hours: (data.hours = e.target.value) };
  //       console.log(`fourth`);
  //       console.log(
  //         `ID: ${data.id} CHECKED: ${data.isChecked} HOURS: ${data.hours}`
  //       );
  //       return { ...checked, isChecked: !data.isChecked };
  //     }
  //   } else {
  //     console.log(`fifth`);
  //     console.log(`nope: ${data.isChecked}`);
  //     return;
  //   }
  // });
  const handleEdit = (id, e) => {
    // console.log(`&&& ID: ${id}, VALUE: ${e.target.value}`);

    setTimeAssignment(
      timeAssignment.map((time) => {
        if (time.id === id) {
          return { ...time, hours: (time.hours = e.target.value) };
        } else {
          return time;
        }
      })
    );
  };

  // console.log(timeAssignment);

  return (
    <>
      {timeAssignment.map((data) => (
        <FormGroup>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <FormControlLabel
              label={data.id}
              control={
                <Checkbox
                  checked={data.isChecked}
                  onChange={(e) => handleCheckboxChange(data, e)}
                />
              }
            />
            <TextField
              name="hours"
              type="number"
              // style={{
              //   visibility: data.isChecked === true ? "visible" : "hidden",
              // }}
              placeholder="0"
              size="small"
              sx={{ width: 100 }}
              onChange={(e) => handleEdit(data.id, e)}
              value={data.hours}
              InputProps={{
                endAdornment: "h",
              }}
            />
          </div>
        </FormGroup>
      ))}
    </>
  );
};

export default NewCheck;
