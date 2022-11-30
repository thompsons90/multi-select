import React, { useState } from "react";
import {
  Autocomplete,
  Checkbox,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { options2 } from "../utils/data";

const ManageableStates = () => {
  const [value, setValue] = useState([]);
  const [inputValue, setInputValue] = useState("");
  //   console.log(value);

  // THIS SECTION CONVERTS DATA OBJECT TO ARRAY FOR AUTOCOMPLETE
  // this array holds all employee names to select from
  const options = [];
  const vals = Object.values(options2);
  vals.map((data) => {
    data.employees.map((data) => {
      // console.log(data.name);
      options.push(data.name);
    });
  });

  // SELECT ALL LOGIC
  const [selected, setSelected] = useState([]);
  const isAllSelected =
    options.length > 0 && selected.length === options.length;
  const handleChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected(selected.length === options.length ? [] : options);
      return;
    }
    setSelected(value);
  };
  // console.log(selected);

  return (
    <>
      <Autocomplete
        multiple
        limitTags={4}
        disableCloseOnSelect
        filterSelectedOptions
        value={value}
        options={options}
        inputValue={inputValue}
        onChange={(event, newValue) => {
          setValue(newValue);
          setSelected(newValue);
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Employees"
            placeholder="Select Employees"
          />
        )}

        //  DO NOT DELETE! WORKING RENDER WITH OPTIONS ATTACHED TO STATE
        // renderOption={(props, option, { selected }) => (
        //   <>
        //     <li {...props}>
        //       <Checkbox checked={selected} />
        //       {option}
        //     </li>
        //   </>
        // )}
      >
        <Select
          labelId="use-assignment-lable"
          multiple
          value={selected}
          onChange={handleChange}
          disableCloseOnSelect
          filterSelectedOptions
          renderValue={(selected) => selected.join(", ")}
        >
          <MenuItem value="all">
            <Checkbox
              checked={isAllSelected}
              indeterminate={
                selected.length > 0 && selected.length < options.length
              }
            />
          </MenuItem>
          <ListItemText primary="Select All" />
          <MenuItem>
            {options.map((option) => {
              <MenuItem key={option} value={value}>
                <Checkbox checked={value.indexOf(option) > -1} />
                <ListItemText primary={option} />
              </MenuItem>;
            })}
          </MenuItem>
        </Select>
      </Autocomplete>
    </>
  );
};
export default ManageableStates;
