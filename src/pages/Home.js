import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


import PrimarySearchAppBar from '../component/AppBar/AppBar'
import { Grid, Button, Typography } from '@mui/material'
import { useState } from 'react'
import NestedList from '../component/sideBar/SideBar';
import React from 'react'
import Add from '../component/add/Add'
import Tabel from '../component/tabel/Tabel';
import Completed from '../component/completed/Completed';
import { useDispatch } from 'react-redux';

import { addTask, deleteTask, updateTask } from '../store/actions/TaskAction';
import { complete, uncomplete } from '../store/actions/CompletedAction'

import nextId from "react-id-generator";

export default function () {
    const [togoller, setTogeller] = useState(true);
    const [taskValue, setTaskValue] = useState('')
    const [ctaUpdate, setCtaUpdate] = useState(false)
    const [updateId, setUpdateId] = useState(0)
    const Dispatch = useDispatch();


    const addNewTask = () => {
        let newTask = {
            task: taskValue,
            id: nextId()
        }
        Dispatch(addTask(newTask))
        setTaskValue('')


    }
    const updateHandeler = (data) => {
        setCtaUpdate(true)
        setTaskValue(data.task)
        console.log(data)
    }
    const onCtaUpdate = () => {
        let newTask = {
            task: taskValue,
            id: updateId
        }
        setCtaUpdate(false)
        setTaskValue('')
        Dispatch(updateTask(newTask))

    }

    const completed = (item) => {
        Dispatch(deleteTask(item.id))
        console.log(item)
        let completedTask = {
            task: item.task,
            id: nextId()
        }
        Dispatch(complete(completedTask))

    }

    return (
        <div>
            <div>
                <PrimarySearchAppBar />
                <Grid container
                    style={{
                        display: 'flex'
                    }}
                >

                    <Grid item sx={12} md={3}>
                        {togoller ?
                            <>
                                <NestedList setTogeller={setTogeller} /></> :
                            <Button variant='outline'
                                color='inherit'
                                onClick={() => setTogeller(true)}
                            >

                                <MenuOutlinedIcon />
                            </Button>}
                    </Grid>
                    <Grid item sx={12} md={8}>
                        <Add add={addNewTask} task={taskValue} setTask={setTaskValue} cta={ctaUpdate} update={onCtaUpdate} />
                        < Tabel update={updateHandeler} Checkbox={completed} />
                        <Typography variant='h5'style={{padding : '20'}}>Completed</Typography>

                        <Completed />
                    </Grid>
                    <Grid item sx={12} md={8}>

                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
