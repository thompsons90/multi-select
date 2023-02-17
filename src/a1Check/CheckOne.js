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

export const CheckOne = () => {
  const [checked, setChecked] = useState([
    { Monday: false, hours: 0 },
    { Tuesday: false, hours: 0 },
    { Wednesday: false, hours: 0 },
    { Thursday: false, hours: 0 },
    { Friday: false, hours: 0 },
  ]);
  const { Monday, Tuesday, Wednesday, Thursday, Friday } = checked;
  const [textValue, setTextValue] = useState("");

  const handleChange = (e) => {
    setChecked({
      ...checked,
      [e.target.name]: e.target.checked,
    });
  };

  // const handleDayChange = (e) => {
  //   const index = day.indexOf(e.target.value);
  //   index === -1
  //     ? setDays([...days, e.target.value])
  //     : setDays(days.filter((day) => day !== e.target.value));
  // };
  const onTextChange = (e) => setTextValue(e.target.value);

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
                control={
                  <Checkbox
                    checked={Monday}
                    onChange={handleChange}
                    name="Monday"
                  />
                }
                label="Monday"
              />
              <TextField
                size="small"
                sx={{ width: 100 }}
                onChange={onTextChange}
                value={textValue}
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
                control={
                  <Checkbox
                    checked={Tuesday}
                    onChange={handleChange}
                    name="Tuesday"
                  />
                }
                label="Tuesday"
              />
              <TextField
                size="small"
                sx={{ width: 100 }}
                onChange={onTextChange}
                value={textValue}
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
                control={
                  <Checkbox
                    checked={Wednesday}
                    onChange={handleChange}
                    name="Wednesday"
                  />
                }
                label="Wednesday"
              />
              <TextField
                size="small"
                sx={{ width: 100 }}
                onChange={onTextChange}
                value={textValue}
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
                control={
                  <Checkbox
                    checked={Thursday}
                    onChange={handleChange}
                    name="Thursday"
                  />
                }
                label="Thursday"
              />
              <TextField
                size="small"
                sx={{ width: 100 }}
                onChange={onTextChange}
                value={textValue}
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
                control={
                  <Checkbox
                    checked={Friday}
                    onChange={handleChange}
                    name="Friday"
                  />
                }
                label="Friday"
              />
              <TextField
                size="small"
                sx={{ width: 100 }}
                onChange={onTextChange}
                value={textValue}
                InputProps={{
                  endAdornment: "h",
                }}
              />
            </div>
          </FormGroup>
          <FormHelperText>Select Day & Time</FormHelperText>
        </FormControl>
      </Typography>
    </div>
  );
};
