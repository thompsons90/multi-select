import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { options2 } from "../utils/data";

const Combo = () => {
  const [value, setValue] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  console.log(value);

  const options = []; // this array holds all employee names to select from
  const vals = Object.values(options2);
  vals.map((data) => {
    data.employees.map((data) => {
      // console.log(data.name);
      options.push(data.name);
    });
  });

  // DO NOT DELETE this section stores the user input and then add it to the value once submitted
  const [inputValue, setInputValue] = useState("");

  const addInput = (employee) => {
    let addedEmployee = employee;
    setValue([...value, addedEmployee]);
    setSelectedValue("");
  };
  console.log(inputValue);

  const handleSubmit = (event, submitValue) => {
    event.preventDefault();
    // console.log(event);
    // console.log(submitValue);
  };
  return (
    <>
      <h3>Combo</h3>

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
        onInputChange={(event, newSelectedValue) => {
          setSelectedValue(newSelectedValue);
          setInputValue(newSelectedValue);
        }}
        renderInput={(params) => (
          <TextField
            {...inputValue}
            {...params}
            inputProps={{
              ...params.inputProps,
              onKeyDown: (e) => {
                if (e.key === "Enter") {
                  e.stopPropagation();
                }
              },
            }}
            label="Employees"
            placeholder="Select Employees"
          />
        )}
      />
      <button onClick={() => addInput(selectedValue)}>
        Add {selectedValue}
      </button>
    </>
  );
};
export default Combo;
