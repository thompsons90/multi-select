import React from "react";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme
} from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import _without from "lodash/without";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CancelIcon from '@mui/icons-material/Cancel';

const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder"
  ];

  const UserArray = () => {
    // const classes = useStyles();
    const [personName, setPersonName] = React.useState(initialSelected);
    const handleChange = (event) => {
      setPersonName(event.target.value);
    };
    const handleDelete = (e, value) => {
      e.preventDefault();
      console.log("clicked delete");
      setPersonName((current) => (current, value));
    };
    return(
        <>
        <h2>Demo</h2>
        </>
    )};


    