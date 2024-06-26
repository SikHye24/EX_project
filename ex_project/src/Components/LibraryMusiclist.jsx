import React from 'react';
import {Box, Grid, Button ,Card, CardMedia} from '@mui/material';
import { useNavigate, useParams } from 'react-router';

export default function LibraryMusiclist({image, title, artist, album}) {
  const Navigate = useNavigate();
  const { id } = useParams();

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
              Navigate(`/songinfo/${id}`);
            }}
          />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
          <Button 
            sx={{ textAlign: 'left', color : 'black'}}
            onClick={() => {
              Navigate(`/songinfo/${id}`);
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
      <Grid item xs={2}>
        <Box sx={{ display: 'flex', marginTop : '20px'}}>
          <Button>음원 다운로드</Button>
        </Box>
      </Grid>
    </Grid>
  );
}

