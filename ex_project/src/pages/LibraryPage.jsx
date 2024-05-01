import React from 'react';
import {Box, Grid,Divider} from '@mui/material';
import Musiclist from '../Components/Musiclist';

export default function LibraryPage() {
  const musiclists = Array.from({ length: 10 }, (_, index) => (
    <React.Fragment key={index}>
      <Musiclist 
        image="https://t1.daumcdn.net/thumb/R720x0.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/8fXh/image/0_JTh3JET7ZCHaT_IJhG4VbhEpI.png"
        title={"test"}
        artist={"test-artsit"}
        album={"test-album"}
      />
      {index !== 9 && <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />}
    </React.Fragment>
  ));

  return (
    <div>
      <Box sx={{marginLeft: '200px', marginRight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center',backgroundColor : 'white' }}>
        <h1>음원 차트</h1>
        <Divider sx={{marginBottom: '10px'}} />
        <Grid item xs={10} sm={6} md={4}>
        <Grid container spacing={2}>
          <Grid item xs={7} sx={{whiteSpace: 'nowrap'}}>
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
      <Box sx={{marginLeft: '200px', marginRight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center',backgroundColor : 'white', marginBottom : '30px' }}>
        {musiclists}
        <Divider sx={{marginTop:'10px',marginBottom: '10px'}} />
      </Box>
    </div>
  );
}

