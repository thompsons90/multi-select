import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";

const SingleFree = () => {
  const [value, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  // console.log(`value: ${value}, selected value: ${selectedValue}`);

  const [options, setOptions] = useState([
    "Manager",
    "Frontend",
    "Backend",
    "Fullstack",
    "Associate",
  ]);
  // console.log(`options: ${options}`);
  // const options = ["Manager", "Frontend", "Backend", "Fullstack", "Associate"];

  // DO NOT DELETE this section stores the user input and then add it to the value once submitted
  const [inputValue, setInputValue] = useState("");

  const addPosition = (position) => {
    let addedPosition = position;
    setValue((value) => [...value, addedPosition]);
    setOptions((options) => [...options, addedPosition]);
    // setOptions((position) => [...position, addedPosition]);
    setSelectedValue("");
    // console.log(`position ${position}`);
  };

  // const addPosition = (selectedValue) => {
  // options.pop(selectedValue);
  // let newerPosition = { position: title };
  // setList([...list, newPosition]);
  // setNewPosition("");
  // };
  return (
    <>
      <h2>Single FreeSolo</h2>
      <h3>Department dropdown inside ModalUser</h3>
      <Autocomplete
        freeSolo
        filterSelectedOptions
        value={value}
        options={options}
        // getOptionLabel={options}
        inputValue={selectedValue}
        onChange={(e, value) => {
          // console.log(`newValue ${value}`);
          //   This sets the value state to either the inputted value or an empty string
          setValue(value || "");
        }}
        onInputChange={(e, newSelectedValue) => {
          // console.log(`newSelectedValue ${newSelectedValue}`);
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
            label="Dept."
            placeholder="Dept."
          />
        )}
      />
      <button
        // style={{
        //   visibility:
        //     value.length < 1 && selectedValue && selectedValue.length !== 0
        //       ? "visible"
        //       : "hidden",
        // }}
        onClick={() => addPosition(selectedValue)}
      >
        Add {selectedValue}
      </button>
      <p>options: {options.join(", ")}</p>
      <p>value: {value}</p>
    </>
  );
};
export default SingleFree;
