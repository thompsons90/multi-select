import React, { useState } from 'react';
import { Checkbox, FormControl, InputLabel, ListItemIcon, ListItemText, MenuItem, Select } from '@mui/material';
import { options1, options2 } from '../utils/data';
import '../style.css'

const Selector = () => {
    const [selected, setSelected] = useState([]);
    const isAllSelected = options1.length > 0 && selected.length === options1.length;

    const handleChange = (event) => {
        const value = event.target.value;
        if (value[value.length - 1] === 'all') {
            setSelected(selected.length === options1.length ? [] : options1);
            return;
        }
        setSelected(value);
    };

    return(
        <>
        <h1>Multi-Select Practice Project</h1>
        <FormControl className="form">
            <InputLabel id="user-assignment-label">User Assignment</InputLabel>
            <Select
            labelId="user-assignment-label"
            multiple value={selected}
            onChange={handleChange}
            renderValue={(selected) => selected.join(', ')}>
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
        </>
    )
}

export default Selector