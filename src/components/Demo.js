import React, { useState } from 'react';
import { 
    Checkbox, 
    // Chip, 
    FormControl, 
    InputLabel, 
    ListItemIcon, 
    ListItemText, 
    MenuItem, 
    Select,
    // TextField 
} from '@mui/material';
import { 
    options1, 
    // options2 
} from '../utils/data';
import '../style.css'
// import { Cancel } from '@mui/icons-material';

const Demo = () => {
    // const userArr = [];
    const [selected, setSelected] = useState([]);
    const isAllSelected = options1.length > 0 && selected.length === options1.length;

        // const updatedUsers = options2.map((val) => (
        //     val.employees.map((emp) => (
        //         userArr.push(emp.name)
        //     ))
        // ));
        // console.log(userArr)


    const handleChange = (event) => {
        const value = event.target.value;
        if (value[value.length - 1] === 'all') {
            setSelected(selected.length === options1.length ? [] : options1);
            return;
        }
        setSelected(value);
    };

    // const handleDelete = (e, value) => {
    //     e.preventDefault();
    //     console.log("clicked delete");
    //     setSelected((current) => (current, value));
    //   };

    // const Confirmation = () => {
    //     const [isOpen, setIsOpen] = useState(true);
    // }


    return(
        <React.Fragment>
        <h2>Working example that uses Checkbox (Demo Component)</h2>
        <FormControl className="form1">
            <InputLabel id="user-assignment-label">User Assignment</InputLabel>
            <Select
            labelId="user-assignment-label"
            multiple 
            value={selected}
            onChange={handleChange}
            disableCloseOnSelect
            filterSelectedOptions
            renderValue={(selected) => (
                // selected.join(', ')}>
                selected.join(', ')
                // ,
            //    <Chip
            //     key={selected}
            //     label={selected}
            //     clickable
            //     deleteIcon = {
            //         <Cancel/>
            //     }
            //     className="chips"
            //     onDelete={(e) => handleDelete(e, selected)}
            //     onClick={() => console.log('chip clicked')}
            //     /> 
    )}>
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
            </Select>
        </FormControl>
        </React.Fragment>
    )
}

export default Demo;