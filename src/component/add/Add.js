import React from 'react'
import { TextField, Typography, Box, Button } from '@mui/material'
// import { uuid } from 'uuidv4';



export default function Add(props) {
    return (
        <div>
            <Box style={{ display: 'flex', alignContent: 'center', flexDirection: 'column', padding: 20 }}>

                <Typography variant='h5'>Add New Task</Typography>
                <Box style={{ background: '#f0fcf0', padding: 30 }}>

                    <TextField id="standard-basic" label="Add work" value={props.task} style={{ width: '75%', margin: 'auto' }} variant="standard" onChange={(e) => props.setTask(e.target.value)} />
                    {
                        props.cta ?
                            <Button variant='contained' style={{ margin: 10 }} color='secondary' onClick={props.update}>Update</Button> :
                            <Button variant='contained' style={{ margin: 10 }} color='primary' onClick={props.add}>Add</Button>
                    }
                </Box>

                <Typography variant='h5'>My Day</Typography>


            </Box>
        </div>
    )
}
