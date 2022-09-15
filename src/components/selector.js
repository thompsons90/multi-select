import React, { useEffect, useState } from 'react';
import { Avatar, Checkbox, Chip, FormControl, InputLabel, ListItemIcon, ListItemText, MenuItem, Paper, Select } from '@mui/material';
import { options1, options2 } from '../utils/data';
import FaceIcon from '@mui/icons-material/Face';
import '../style.css'
import { AccountBalance, AccountBalanceWallet, Adb } from '@mui/icons-material';

const Selector = () => {
    const userArr = [];
    const [selected, setSelected] = useState([]);
    const [chipData, setChipData] = useState([ "Chip 1", "Chip 2", "Chip 3"
        // { id: 0, name: 'Adam' },
        // { id: 1, name: 'Becky'},
        // { id: 3, name: 'Chad' },
        // { id: 4, name: 'Daisy' },
        // { id: 5, name: 'Everett' },
        // { id: 6, name: 'Francine' },
    ]);
    const handleDelete = (chipToDelete) => {
        setSelected(chips => chips.filter(chip => chip !== chipToDelete));
    };

    const isAllSelected = userArr.length > 0 && selected.length === userArr.length;

        const updatedUsers = options2.map((val) => (
            val.employees.map((emp) => (
                userArr.push(emp.name)
            ))
        ));
        console.log(userArr)


    const handleChange = (event) => {
        const value = event.target.value;
        if (value[value.length - 1] === 'all') {
            setSelected(selected.length === userArr.length ? [] : userArr);
            return;
        }
        setSelected(value);
    };

    return(
        <React.Fragment>
        <h2>Multi-Select Practice Project</h2>
        {/* <div className="chip-dip">
            <Chip label="A Chip" color="success" icon={<Adb/>}/>
            <Chip label="B Chip" color="primary" clickable onClick={() => alert('Clicked')}/>
            <Chip label="C Chip" color="secondary" size="small" avatar={<Avatar>S</Avatar>}/>
            <Chip label="D Chip" color="warning" variant="outlined" icon={<AccountBalanceWallet/>}/>
            <Chip label="E Chip" color="info" size="small" icon={<FaceIcon />}/>
            <Chip label="Delete" color="error" onClick={() => alert('Clicked')} onDelete={() => alert('Delete handler called')}/>
        </div> */}
        {/* {
            options1.map(chip => (
                <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
            ))
        } */}


        <FormControl className="form1">
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
                        indeterminate={selected.length > 0 && selected.length < userArr.length}/>
                    </ListItemIcon>
                    <ListItemText primary="Select All"/>
                </MenuItem>
                {userArr.map((option) => (
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

export default Selector