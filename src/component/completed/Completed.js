import React from 'react'
import { ListItemButton, Checkbox, List, ListItem, IconButton, ListItemIcon, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux';
import UpdateIcon from '@mui/icons-material/Update'

import { uncomplete } from '../../store/actions/CompletedAction';
import { addTask } from '../../store/actions/TaskAction';
import nextId from "react-id-generator";

export default function Completed() {

    const completed = useSelector((state) => state.CompleteReducer.data)
    const Dispatch = useDispatch();
    // list
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];



        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    const uncompleted = (item) => {
        Dispatch(uncomplete(item.id))
        let task = {
            task: item.task,
            id: nextId()
        }
        Dispatch(addTask(task))
    }


    return (
        <div>

            {
                completed.map((item, index) => {


                    return (
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItem
                                disablePadding
                            >
                                <ListItemButton role={undefined} onClick={handleToggle()} dense>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            tabIndex={-1}
                                            disableRipple
                                            // onAuxClick={checkBox}
                                            onChange={() => uncompleted(item)}
                                            checked
                                        />
                                    </ListItemIcon>
                                    <Typography variant='overline'>{item.task}</Typography>
                                </ListItemButton>
                            </ListItem>


                        </List>
                    );

                })
            }
        </div>
    )
}
