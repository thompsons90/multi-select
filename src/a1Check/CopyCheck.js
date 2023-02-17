import React, { useState } from "react";
import { CheckBox } from "@mui/icons-material";
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

const timeAssignment = [
  { id: 1, Sunday: false, sunHours: "" },
  { id: 2, Monday: false, monHours: "" },
  { id: 3, Tuesday: false, tueHours: "" },
  { id: 4, Wednesday: false, wedHours: "" },
  { id: 5, Thursday: false, thuHours: "" },
  { id: 6, Friday: false, friHours: "" },
  { id: 7, Saturday: false, satHours: "" },
];

export const CopyCheck = () => {
  const [checked, setChecked] = useState(timeAssignment);

  const { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday } =
    checked;
  const [textValue, setTextValue] = useState("");

  //   const textfieldOccupied = checked.sunHours !== "";

  // this handler function is used for the left side column key value pair; ie. {Sunday : true},
  // e.target.value === the name of the day; ie. Sunday, Monday...
  // e.target.checked === Boolean; ie. true || false
  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setChecked({ ...checked, [e.target.value]: e.target.checked });
    // console.log(
    //   `&&&&&&&& ${e.target.value} ${e.target.checked} ${e.target.name}`
    // );
  };

  // this handler function is used for the right side column key value pair; ie. { sunHours: ''}
  // the default value is an empty string '' but the textfield type only allows numbers and decimals
  // e.target.name === sunHours, monHours...
  // e.target.value === '' || the number of hours
  const onHourChange = (e) => {
    const value = e.target.value;
    setChecked({ ...checked, [e.target.name]: value });

    // if the object includes not an empty string, set the checkbox to true

    if (e.target.name !== "") {
      // console.log(` $$$$$$$$$$ ${e.target.name} ${e.target.value}`);
      setChecked({ ...checked, Sunday: true });
    } else {
      // console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
    }
  };

  // Used for update actions; choose exact element to mutate
  // Pass id to handler from jsx onChange, id accessed from handler,
  // If I check Mon box, it'll check the id's we pass id: 2
  // let indexValue = checked.findIndex((user) => user.id === param);

  // checked[indexValue] = {
  //   ...checked[indexValue],
  //   []: !checked[index].checked,
  // };

  const handleCheckIfHours = (e) => {
    // I need to check if the corresponding hours field has input;
    // ^ If so, then this function sets the checkbox to true
    // if ()
  };

  // console.log(checked);
  return (
    <div>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Set Hours for Task
      </Typography>
      <Typography id="modal-modal-description">
        <FormControl
          style={{ width: "100%" }}
          sx={{ m: 3 }}
          component="fieldset"
          variant="standard"
        >
          <FormLabel component="legend">Time Assigned</FormLabel>
          <FormGroup>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <FormControlLabel
                label="Sunday"
                control={
                  <Checkbox
                    value="Sunday"
                    checked={Sunday}
                    onChange={handleCheckboxChange}
                  />
                }
              />
              <TextField
                name="sunHours"
                type="number"
                placeholder="0"
                size="small"
                sx={{ width: 100 }}
                onChange={onHourChange}
                value={checked.sunHours}
                InputProps={{
                  endAdornment: "h",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#d3d3d3",
              }}
            >
              <FormControlLabel
                label="Monday"
                control={
                  <Checkbox
                    value="Monday"
                    checked={Monday}
                    onChange={handleCheckboxChange}
                  />
                }
              />
              <TextField
                name="monHours"
                type="number"
                placeholder="0"
                size="small"
                sx={{ width: 100 }}
                onChange={onHourChange}
                value={checked.monHours}
                InputProps={{
                  endAdornment: "h",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <FormControlLabel
                label="Tuesday"
                control={
                  <Checkbox
                    value="Tuesday"
                    checked={Tuesday}
                    onChange={handleCheckboxChange}
                  />
                }
              />
              <TextField
                name="tueHours"
                type="number"
                placeholder="0"
                size="small"
                sx={{ width: 100 }}
                onChange={onHourChange}
                value={checked.tueHours}
                InputProps={{
                  endAdornment: "h",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#d3d3d3",
              }}
            >
              <FormControlLabel
                label="Wednesday"
                control={
                  <Checkbox
                    value="Wednesday"
                    checked={Wednesday}
                    onChange={handleCheckboxChange}
                  />
                }
              />
              <TextField
                name="wedHours"
                type="number"
                placeholder="0"
                size="small"
                sx={{ width: 100 }}
                onChange={onHourChange}
                value={checked.wedHours}
                InputProps={{
                  endAdornment: "h",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <FormControlLabel
                label="Thursday"
                control={
                  <Checkbox
                    value="Thursday"
                    checked={Thursday}
                    onChange={handleCheckboxChange}
                  />
                }
              />
              <TextField
                name="thuHours"
                type="number"
                placeholder="0"
                size="small"
                sx={{ width: 100 }}
                onChange={onHourChange}
                value={checked.thuHours}
                InputProps={{
                  endAdornment: "h",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#d3d3d3",
              }}
            >
              <FormControlLabel
                label="Friday"
                control={
                  <Checkbox
                    value="Friday"
                    checked={Friday}
                    onChange={handleCheckboxChange}
                  />
                }
              />
              <TextField
                name="friHours"
                type="number"
                placeholder="0"
                size="small"
                sx={{ width: 100 }}
                onChange={onHourChange}
                value={checked.friHours}
                InputProps={{
                  endAdornment: "h",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <FormControlLabel
                label="Saturday"
                control={
                  <Checkbox
                    value="Saturday"
                    checked={Saturday}
                    onChange={handleCheckboxChange}
                  />
                }
              />
              <TextField
                name="satHours"
                type="number"
                placeholder="0"
                size="small"
                sx={{ width: 100 }}
                onChange={onHourChange}
                value={checked.satHours}
                InputProps={{
                  endAdornment: "h",
                }}
              />
            </div>
          </FormGroup>
          <FormHelperText>Select Day & Edit Time</FormHelperText>
        </FormControl>
      </Typography>
    </div>
  );
};
