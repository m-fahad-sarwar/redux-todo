import React, { useState } from 'react'
import PrimarySearchAppBar from '../component/AppBar/AppBar'
import { Grid, Button, Typography } from '@mui/material'
import NestedList from '../component/sideBar/SideBar';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';



export default function AssignedToMe() {
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
          <Typography variant='h5'>Assigned to me</Typography>
        <Grid item sx={8} md={8} style={{ margin: 'auto' }}>
        </Grid>
      </Grid>    </div>
  )
}
