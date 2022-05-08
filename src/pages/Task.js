import React, { useState } from 'react'
import PrimarySearchAppBar from '../component/AppBar/AppBar'
import { Grid, Button, Typography } from '@mui/material'
import NestedList from '../component/sideBar/SideBar';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';



export default function Task() {
  const [togoller, setTogeller] = useState(true);

  return (
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
          <Typography variant='h5' style={{padding: 20}}>Task</Typography>
        <Grid item >
        </Grid>
      </Grid>    </div>
  )
}
