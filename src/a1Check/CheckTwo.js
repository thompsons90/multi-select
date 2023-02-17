import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  TextField,
} from "@mui/material";
import { Bookmark, BookmarkBorder } from "@mui/icons-material";

export const CheckTwo = () => {
  const [accept, setAccept] = useState(false);
  const [skills, setSkills] = useState([]);
  const [hours, setHours] = useState({
    Monday: false,
    monHours: "",
    Tuesday: false,
    tueHours: "",
    Wednesday: false,
    wedHours: "",
  });
  const { Monday, Tuesday, Wednesday } = hours;

  // console.log(skills);
  const handleChange = (e) => {
    setAccept(e.target.checked);
  };

  //   const handleHourChange = (e) => {
  //     const index = skills.indexOf(e.target.value);
  //     if (index === -1) {
  //       setSkills([...skills, e.target.value]);
  //     } else {
  //       setSkills(skills.filter((skill) => skill !== e.target.value));
  //     }
  //   };
  const handleHourChange = (e) => {
    const value = e.target.value;
    setHours({ ...hours, [e.target.value]: e.target.checked });
    // const index = skills.indexOf(e.target.value);
    // if (index === -1) {
    //   setSkills([...skills, e.target.value]);
    // } else {
    //   setSkills(skills.filter((skill) => skill !== e.target.value));
    // }
  };

  const onTextChange = (e) => {
    const value = e.target.value;
    setHours({ ...hours, [e.target.name]: value });
  };
  // console.log(hours);
  return (
    <>
      {/* <Box>
        <FormControlLabel
          label="I accept"
          control={<Checkbox checked={accept} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          checked={accept}
          onChange={handleChange}
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
        />
      </Box> */}
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="Monday"
              control={
                <>
                  <Checkbox
                    value="Monday"
                    checked={Monday}
                    onChange={handleHourChange}
                  />
                  <TextField
                    name="monHours"
                    placeholder="0"
                    size="small"
                    sx={{ width: 100 }}
                    onChange={onTextChange}
                    value={hours.monHours}
                    InputProps={{
                      endAdornment: "h",
                    }}
                  />
                </>
              }
            />

            <FormControlLabel
              label="Tuesday"
              control={
                <>
                  <Checkbox
                    value="Tuesday"
                    checked={Tuesday}
                    onChange={handleHourChange}
                  />
                  <TextField
                    name="tueHours"
                    placeholder="0"
                    size="small"
                    sx={{ width: 100 }}
                    onChange={onTextChange}
                    value={hours.tueHours}
                    InputProps={{
                      endAdornment: "h",
                    }}
                  />
                </>
              }
            />
            <FormControlLabel
              label="Wednesday"
              control={
                <>
                  <Checkbox
                    value="Wednesday"
                    checked={Wednesday}
                    onChange={handleHourChange}
                  />
                  <TextField
                    name="wedHours"
                    placeholder="0"
                    size="small"
                    sx={{ width: 100 }}
                    onChange={onTextChange}
                    value={hours.wedHours}
                    type="number"
                    InputProps={{
                      endAdornment: "h",
                    }}
                  />
                </>
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </>
  );
};
