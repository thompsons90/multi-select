import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { options2 } from "../utils/data";

const SingleFree = () => {
  const [value, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  console.log(`value: ${value}, selected value: ${selectedValue}`);

  // const [options, setOptions] = useState([
  //   "Manager",
  //   "Frontend",
  //   "Backend",
  //   "Fullstack",
  //   "Associate",
  // ]);
  // console.log(`options: ${options}`);
  const options = ["Manager", "Frontend", "Backend", "Fullstack", "Associate"];

  // DO NOT DELETE this section stores the user input and then add it to the value once submitted
  const [inputValue, setInputValue] = useState("");

  const addPosition = (position) => {
    let addedPosition = position;
    setValue([...value, addedPosition]);
    setSelectedValue("");
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
            label="Dept."
            placeholder="Dept."
          />
        )}
      />
      <button
        style={{
          visibility:
            value.length < 1 && selectedValue && selectedValue.length !== 0
              ? "visible"
              : "hidden",
        }}
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
