import React from 'react'

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#90EE90' : '#F8F8FF',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const WorkspaceGrid = ({workspaceCard}) => {

  return (
    <div>
        
        <Box sx={{ margin: 4, flexGrow: 1 }}>
         
          <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>

            {workspaceCard.map(w => (

                Array.from(Array(1)).map((_, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <Item>{w}</Item>
                  </Grid>
                ))

            ))}
       
          </Grid>
        </Box>

    </div>
  )
}

export default WorkspaceGrid