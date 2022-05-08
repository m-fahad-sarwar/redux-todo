import React, { useState } from 'react'
import PrimarySearchAppBar from '../component/AppBar/AppBar'
import { Grid, Button, Typography } from '@mui/material'
import NestedList from '../component/sideBar/SideBar';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import Completed from '../component/completed/Completed';

export default function CompletedPage() {
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
        <Grid item sx={8} md={8} style={{ margin: '10' }}>
          <Typography variant='h5'>Completed</Typography>
         <Completed />
        </Grid>
        
      </Grid>    
      </div>
  )
}
