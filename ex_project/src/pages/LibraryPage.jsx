import React from 'react';
import {Box, Grid,Divider} from '@mui/material';

export default function LibraryPage() {
  return (
    <div>
      <Box sx={{marginLeft: '200px', marginRight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center',backgroundColor : 'white' }}>
        <h1>음원 차트</h1>
        <Divider sx={{marginBottom: '10px'}} />
        <Grid item xs={10} sm={6} md={4}>
        <Grid container spacing={2}>
          <Grid item xs={6} sx={{whiteSpace: 'nowrap'}}>
            <p1>곡/앨범</p1>
          </Grid>
          <Grid item xs={3} sx={{whiteSpace: 'nowrap'}}>
            <p1>아티스트</p1>
          </Grid>
          <Grid item xs={1} sx={{whiteSpace: 'nowrap'}}>
            <p1>음원구매</p1>
          </Grid>
          <Grid item xs={1} sx={{whiteSpace: 'nowrap'}}>
            <p1>NFT구매</p1>
          </Grid>
        </Grid>
        <Divider sx={{marginTop:'10px',marginBottom: '10px'}} />
        </Grid>
      </Box>
    </div>
  );
}

