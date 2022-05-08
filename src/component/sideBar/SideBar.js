import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Box, Button } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function NestedList(prop) {
    const [open, setOpen] = React.useState(false);

    const completedtask = useSelector((state) => state.CompleteReducer.data)
    var size = Object.keys(completedtask).length;

    return (

        <Box style={{width: '40vh'}} sx={{height: '100%', width: '100vh'}}>
            <Button variant='outline'
                color='inherit'
                onClick={() => prop.setTogeller(false)}
            >

                <MenuOutlinedIcon />
            </Button>
            <List
                sx={{bgcolor: 'background.inherit' }}
                component="nav"
                aria-labelledby="nested-list-subheader"

            >
                <ListItemButton>
                    <Link to='/'>
                        <ListItemIcon>
                            <WbSunnyIcon />
                            My Day
                        </ListItemIcon>
                    </Link>
                </ListItemButton>
                <ListItemButton>
                    <Link to='/completed'>
                        <ListItemIcon>
                            <GradeIcon />
                            Completed  {size}
                        </ListItemIcon>
                    </Link>
                </ListItemButton>
                <ListItemButton>
                    <Link to='/assigned'>
                        <ListItemIcon>
                            <AssignmentIndOutlinedIcon />
                            Assigned to me
                        </ListItemIcon>
                    </Link>
                </ListItemButton>
                <ListItemButton>
                    <Link to='/task'>
                        <ListItemIcon>
                            <HomeOutlinedIcon />
                            Task
                        </ListItemIcon>

                    </Link>
                </ListItemButton>

            </List>

        </Box>
    );
}