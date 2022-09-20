import React, { useState } from 'react';
import { Autocomplete, Checkbox, Chip, FormControl, InputLabel, ListItemIcon, ListItemText, MenuItem, Select } from '@mui/material';
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

const initialSelected = ["April Tucker", "Ralph Hubbard"];

const Practice = () => {
    const [personName, setPersonName] = useState([initialSelected]);
    const isAllSelected = names.length > 0 && personName.length === names.length;

    const handleChange = (event) => {
        const value = event.target.value;
        if (value[value.length - 1] === 'all') {
            setPersonName(personName.length === names.length ? [] : names);
            return;
        }
        setPersonName(value);
    };

    const handleDelete = (e, value) => {
        e.preventDefault();
        console.log('clicked delete');
        setPersonName((current) => (current, value));
    };

    return ( 
        <>
        <FormControl className='form'>
            <InputLabel id='newest-try'/>
            <Select
                labelId='multi-chip-attempt-label'
                id='checkbox'
                multiple
                value={personName}
                onChange={handleChange}
                onOpen={() => console.log('select opened')}
                renderValue={(selected) => (
                    <div className='chip-container'>
                        {(selected).map((value) => (
                            <Chip
                            key={value}
                            label={value}
                            clickable
                            deleteIcon={
                                <CancelIcon
                                onMouseDown={(event) => event.stopPropagation()}
                                />
                            }
                            onDelete={(e) => handleDelete(e, value)}
                            onClick={() => console.log('chip clicked')}
                        />
                        ))}
                    </div>
                )}
            >
                {names.map((name) => (
                    <MenuItem key={name} value={name}>
                        <Checkbox
                            checked={isAllSelected}
                            indeterminate={
                                personName.length > 0 && personName.length < names.length
                            }
                        />
                        <ListItemText primary={name} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
        </>
     );
}
 
export default Practice;