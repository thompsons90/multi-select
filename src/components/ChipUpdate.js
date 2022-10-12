import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Checkbox } from "@mui/material";
import "./style.css";
import { movies } from "../utils/data";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const ChipUpdate = () => {
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  return (
    <div className="current-container">
      <h2>Most Current Version</h2>
      <Autocomplete
        multiple
        id="chip-update-demo"
        limitTags={4}
        options={movies}
        disableCloseOnSelect
        // filterSelectedOptions
        // onChange={handleChange}
        getOptionLabel={(option) => option.title}
        renderOption={(props, option, { selected }) => (
          <>
            <li {...props}>
              <Checkbox
                // icon={CheckBoxOutlineBlankIcon}
                // checkedIcon={CheckBoxIcon}
                // style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.title}
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
