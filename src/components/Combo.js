import React, { useReducer, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import {
  // Button,
  Checkbox,
  // FormControl,
  // InputLabel,
  // ListItemIcon,
  // ListItemText,
  // MenuItem,
  // Select
} from "@mui/material";
import "./style.css";
import { options1, options2, movies } from "../utils/data";

const ChipUpdate = () => {
  // const values = Object.values(options2);
  // const employees = values.map((data) => data.employees);
  // const empData = Object.values(employees);
  // const data1 = empData.map((data) => data[0]);
  // const emp1 = data1.map((data) => data.name);
  // console.log(emp1);

  const empArr = [];
  const nameArr = [];
  // const data = options2.map((data) => {
  //   empArr.push(data.employees);
  // });

  // const arr = Object.entries(options2);
  // const keys = Object.keys(options2);

  // console.log(keys);
  // console.log(vals);

  // const info = arr.map((data) => {
  //   empArr.push(data[1].employees);
  // });
  // console.log(empArr);

  // const data = Object.values(empArr[1]);
  // console.log(data);

  // -------------------------------
  // let rows = empArr.length;
  // for (let i = 0; i < rows; i++) {
  //   let items = empArr[i].length;
  //   // console.log(i, items);
  //   for (let j = 0; j < items; j++) {
  //     // console.log(empArr[i][j].name);
  //   }
  // }
  // -------------------------------
  const userNames = [];
  const vals = Object.values(options2);
  for (let i = 0, len = vals.length; i < len; i++) {
    // console.log(vals[i].employees);
    let stats = vals[i].employees;
    for (let j = 0; j < stats.length; j++) {
      // console.log(stats[j]["name"]);
      userNames.push(stats[j]["name"]);
    }
  }
  console.log(userNames);
  // -------------------------------
  return (
    <div className="current-container">
      <h2>Most Current Version</h2>
      <Autocomplete
        multiple
        id="chip-update-demo"
        limitTags={4}
        options={userNames}
        disableCloseOnSelect
        filterSelectedOptions
        // onChange={handleChange}
        getOptionLabel={(option) => option}
        renderOption={(props, option, { selected }) => (
          <>
            <li {...props}>
              <Checkbox checked={selected} />
              {option}
            </li>
          </>
        )}
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField {...params} label="Movies" placeholder="Favorites" />
        )}
      />
    </div>
  );
};
export default ChipUpdate;
