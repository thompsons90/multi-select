import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectDay = () => {
  const [day, setDay] = useState("monday");

  const handleChange = (event) => {
    setDay(event.target.value);
  };
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log(day);
  return (
    <Box sx={{ minWidth: 300 }}>
      <p>When?</p>
      {/* The following div is needed for styling purposes if we keep the InputLabel */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <p>Each </p>
        <FormControl
          sx={{
            width: 300,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div>
            {/* <InputLabel id="demo-simple-select-label">day</InputLabel> */}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={day}
              onChange={handleChange}
              style={{
                marginLeft: "5px",
                marginRight: "5px",
                fontWeight: "bold",
              }}
              sx={{ width: 125 }}
              //   size="small"
            >
              <MenuItem value={"sunday"}>Sunday</MenuItem>
              <MenuItem value={"monday"}>Monday</MenuItem>
              <MenuItem value={"tuesday"}>Tuesday</MenuItem>
              <MenuItem value={"wednesday"}>Wednesday</MenuItem>
              <MenuItem value={"thursday"}>Thursday</MenuItem>
              <MenuItem value={"friday"}>Friday</MenuItem>
              <MenuItem value={"saturday"}>Saturday</MenuItem>
            </Select>
          </div>
          <p> before 7am</p>
        </FormControl>
      </div>
    </Box>
  );
};

export default SelectDay;
