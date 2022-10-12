import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Checkbox } from "@mui/material";
import "./style.css";
import { options1, options2, movies } from "../utils/data";

const ChipUpdate = () => {
  const empArr = [];
  const nameArr = [];

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
