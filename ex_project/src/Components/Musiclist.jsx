import React from 'react';
import {Box, Grid, Button ,Card, CardMedia} from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import { useNavigate } from 'react-router';

export default function Musiclist({image, title, artist, album}) {
  const Navigate = useNavigate();
  return (
    <Grid container spacing={2}>
      <Grid item xs={1}>
        <Card sx={{ width: '70px', height: '70px' }}>
          <CardMedia
            component="img"
            image={image}
            alt="Music"
            sx={{ width: '100%', height: '100%' }}
            onClick={() => {
              Navigate('/songinfo');
            }}
          />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
          <Button 
            sx={{ textAlign: 'left', color : 'black'}}
            onClick={() => {
              Navigate('/songinfo');
            }}
          >{title}</Button>
          <Button sx={{ textAlign: 'left', color : 'gray'}}>{album}</Button>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box sx={{ display: 'flex', marginTop : '15px'}}>
          <Button sx={{color : 'black'}}>{artist}</Button>
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

