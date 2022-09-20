import React, { useReducer, useState } from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { options1 } from "../utils/data";
import {
    Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select
} from "@mui/material";
import './style.css';





import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
// import Button from "@material-ui/core/Button";
const options = [
    { id: 1, title: "The Shawshank Redemption", year: 1994 },
    { id: 2, title: "The Godfather", year: 1972 },
    { id: 3, title: "The Godfather: Part II", year: 1974 },
    { id: 4, title: "The Dark Knight", year: 2008 },
    { id: 5, title: "12 Angry Men", year: 1957 },
    { id: 6, title: "Schindler's List", year: 1993 },
    { id: 7, title: "Pulp Fiction", year: 1994 },
    {
      id: 8,
      title: "The Lord of the Rings: The Return of the King",
      year: 2003
    },
    {
      id: 9,
      title: "The Good, the Bad and the Ugly",
      year: 1966
    },
    { id: 10, title: "Fight Club", year: 1999 },
    {
      id: 11,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001
    },
    {
      id: 12,
      title: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
      checked: false
    },
    { id: 13, title: "Forrest Gump", year: 1994, checked: false },
    { id: 14, title: "Inception", year: 2010, checked: false },
    {
      id: 15,
      title: "The Lord of the Rings: The Two Towers",
      year: 2002
    },
    {
      id: 16,
      title: "One Flew Over the Cuckoo's Nest",
      year: 1975
    },
    { id: 17, title: "Goodfellas", year: 1990 },
    { id: 18, title: "The Matrix", year: 1999 },
    { id: 19, title: "Seven Samurai", year: 1954 },
    {
      id: 20,
      title: "Star Wars: Episode IV - A New Hope",
      year: 1977
    },
    { id: 21, title: "City of God", year: 2002 },
    { id: 22, title: "Se7en", year: 1995 },
    { id: 23, title: "The Silence of the Lambs", year: 1991 },
    { id: 24, title: "It's a Wonderful Life", year: 1946 },
    { id: 25, title: "Life Is Beautiful", year: 1997 },
    { id: 26, title: "The Usual Suspects", year: 1995 },
    { id: 27, title: "Léon: The Professional", year: 1994 },
    { id: 28, title: "Spirited Away", year: 2001 },
    { id: 29, title: "Saving Private Ryan", year: 1998 },
    { id: 30, title: "Once Upon a Time in the West", year: 1968 },
    { id: 31, title: "American History X", year: 1998 },
    { id: 32, title: "Interstellar", year: 2014 }
  ];

  function reducer(state, action) {
    switch (action.type) {
      case "SET_SELECTED_OPTIONS":
        return { selectedOptions: action.payload.options };
  
      case "REMOVE_OPTION":
        return {
          selectedOptions: state.selectedOptions.filter(
            (option) => option.id !== action.payload.id
          )
        };
      default:
        throw new Error();
    }
  };

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
    const initialState = { selectedOptions: [] };

    

      const [state, dispatch] = useReducer(reducer, initialState);
      
      const handleChange = (event, values) => {
        dispatch({ type: "SET_SELECTED_OPTIONS", payload: { options: values } });
      };
    
      const removeOption = (id) => {
        dispatch({ type: "REMOVE_OPTION", payload: { id: id } });
      };

    return (
        <div className="current-container">
        <h2>Most Current Version</h2>
        <Autocomplete
        multiple
        options={options}
        // disableCloseOnSelect
        getOptionLabel={(option) => option.title}
        value={state.selectedOptions}
        renderTags={(values, getTagProps) =>
          values.map((value, index) => (
            <Chip
              key={value.id}
              label={value.title}
              {...getTagProps({ index })}
              onDelete={() => {
                removeOption(value.id);
              }}
            />
          ))
        }
        getOptionSelected={(option, value) => option.id === value.id}
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.title}
          </React.Fragment>
        )}
        style={{ width: 500 }}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Checkboxes"
            placeholder="Favorites"
          />
        )}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={() =>
          dispatch({
            type: "SET_SELECTED_OPTIONS",
            payload: {
              options: [
                {
                  id: 30,
                  title: "Once Upon a Time in the West",
                  year: 1968,
                  checked: false
                }
              ]
            }
          })
        }
      >
        Simulate changes from outside
      </Button>
      <pre>{JSON.stringify(state, null, 2)}</pre>





        {/* <Autocomplete
            multiple
            id='tags-outlined'
            options={options1}
            filterSelectedOptions
            disableCloseOnSelect
            // getOptionsSelected={(option, value) => option.value === value.value}
            renderOption={(option) => (
                <>
                 <MenuItem
                value="all">
                    <ListItemIcon>
                        <Checkbox
                            checked={isAllSelected}
                            indeterminate={selected.length > 0 && selected.length < options1.length}/>
                    </ListItemIcon>
                    <ListItemText primary="Select All"/>
                </MenuItem>
                {options1.map((option) => (
                    <MenuItem key={option} value={option}>
                        <ListItemIcon>
                            <Checkbox checked={selected.indexOf(option) > -1} />
                        </ListItemIcon>
                        <ListItemText primary={option} />
                    </MenuItem>
                ))}
                </>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label='filterSelectedOptions'
                    placeholder='User Assignments'
                    SelectProps={{
                        multiple: true
                    }}
                />
            )}
        >
           
        </Autocomplete> */}
        </div>
    )
}
export default ChipUpdate;

