import React, {useState} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const ListSlopes = () => {

    const [slopes, setSlopes] = useState(["slope1", "slope2", "slope3", "slope4"]);

    return (
        <div style={{textAlign:""}}>
            <List>
            {slopes.map((gnarHill) => 
                <ListItem>
                <ListItemButton>
                    <ListItemText primary={gnarHill} />
                </ListItemButton>
                </ListItem>
            )}
            </List>
        </div>
    );
}

export default ListSlopes;