import React, { useReducer, useState } from "react";
// import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
// import Stack from "@mui/material/Stack";
// import { options1 } from "../utils/data";
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
import { movies } from "../utils/data";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
// import Button from "@material-ui/core/Button";

// function reducer(state, action) {
//   switch (action.type) {
//     case "SET_SELECTED_OPTIONS":
//       return { selectedOptions: action.payload.options };

//     case "REMOVE_OPTION":
//       return {
//         selectedOptions: state.selectedOptions.filter(
//           (option) => option.id !== action.payload.id
//         )
//       };
//     default:
//       throw new Error();
//   }
// };

const ChipUpdate = () => {
  // const [selected, setSelected] = useState([]);
  // const isAllSelected = options1.length > 0 && selected.length === options1.length;

  // const handleChange = (event) => {
  //     const value = event.target.value;
  //     if (value[value.length - 1] === 'all') {
  //         setSelected(selected.length === options1.length ? [] : options1);
  //         return;
  //     }
  //     setSelected(value);
  // };
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  // const [selected, setSelected] = useState([]);
  // const initialState = { selectedOptions: [] };
  // const isAllSelected = movies.length > 0 && selected.length === movies.length;

  //   const handleChange = (event) => {
  //     const value = event.target.value;
  //     if (value[value.length - 1] === 'all') {
  //         setSelected(selected.length === movies.length ? [] : movies);
  //         return;
  //     }
  //     setSelected(value);
  // };

  // const [state, dispatch] = useReducer(reducer, initialState);

  // const handleChange = (event, values) => {
  //   dispatch({ type: "SET_SELECTED_OPTIONS", payload: { options: values } });
  // };

  // const removeOption = (id) => {
  //   dispatch({ type: "REMOVE_OPTION", payload: { id: id } });
  // };

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
