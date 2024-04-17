import React from 'react';
import {Box, Grid, Button ,Card, CardMedia} from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AudioFileIcon from '@mui/icons-material/AudioFile';

export default function Musiclist() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={1}>
        <Card sx={{ width: '70px', height: '70px' }}>
          <CardMedia
            component="img"
            image="https://t1.daumcdn.net/thumb/R720x0.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/8fXh/image/0_JTh3JET7ZCHaT_IJhG4VbhEpI.png"
            alt="Music"
            sx={{ width: '100%', height: '100%' }}
          />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
          <Button sx={{ textAlign: 'left', color : 'black'}}>test</Button>
          <Button sx={{ textAlign: 'left', color : 'gray'}}>test-album-name</Button>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box sx={{ display: 'flex', marginTop : '15px'}}>
          <Button sx={{color : 'black'}}>Artist</Button>
        </Box>
      </Grid>
      <Grid item xs={1}>
        <Box sx={{ display: 'flex', marginTop : '20px'}}>
          <MusicNoteIcon />
        </Box>
      </Grid>
      <Grid item xs={1}>
        <Box sx={{ display: 'flex', marginTop : '20px'}}>
          <AudioFileIcon />
        </Box>
      </Grid>
    </Grid>
  );
}

