import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { options2 } from "../utils/data";

const StateCopy = () => {
  const [value, setValue] = useState([]);
  const [selectedValue, setselectedValue] = useState("");
  console.log(value);
  const options = []; // this array holds all employee names to select from
  const vals = Object.values(options2);
  vals.map((data) => {
    data.employees.map((data) => {
      // console.log(data.name);
      options.push(data.name);
    });
  });

  return (
    <>
      <Autocomplete
        multiple
        freeSolo
        limitTags={4}
        disableCloseOnSelect
        filterSelectedOptions
        value={value}
        options={options.sort()}
        inputValue={selectedValue}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onInputChange={(event, newselectedValue) => {
          setselectedValue(newselectedValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Employees"
            placeholder="Select Employees"
          />
        )}
      />
    </>
  );
};
export default StateCopy;
