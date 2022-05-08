import React from 'react'
import { ListItemButton, Checkbox, List, ListItem, IconButton, ListItemText, ListItemIcon } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux';
import UpdateIcon from '@mui/icons-material/Update'
import { deleteTask } from '../../store/actions/TaskAction';



export default function Tabel(props) {

    const task = useSelector((state) => state.TaskReducer.data)
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




    return (
        <div>
            {
                task.map((item, index) => {


                    return (
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItem
                                secondaryAction={
                                    <div>

                                        <IconButton edge="end" aria-label="comments">
                                            <DeleteIcon color='error' onClick={() =>Dispatch(deleteTask(item.id))} />
                                        </IconButton>
                                        <IconButton edge="end" aria-label="comments">
                                            <UpdateIcon color='primary' onClick={() => props.update(item)} />
                                        </IconButton>
                                    </div>
                                }
                                disablePadding
                            >
                                <ListItemButton role={undefined} onClick={handleToggle()} dense>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            tabIndex={-1}
                                            disableRipple
                                            // onAuxClick={checkBox}
                                            onChange={()=>props.Checkbox(item)}

                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={item.task} />
                                </ListItemButton>
                            </ListItem>


                        </List>
                    );

                })
            }
        </div>
    )
}
