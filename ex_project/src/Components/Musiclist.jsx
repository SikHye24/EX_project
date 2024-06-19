import React from 'react';
import {Box, Grid, Button ,Card, CardMedia} from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import { useNavigate } from 'react-router';

export default function Musiclist({image, title, artist, album, id}) {
  const navigate = useNavigate();
  const isBase64 = (str) => {
    try {
      return btoa(atob(str)) === str;
    } catch (err) {
      return false;
    }
  };

  const imageUrl = isBase64(image) ? `data:image/jpeg;base64,${image}` : image;

  return (
    <Grid container spacing={2}>
      <Grid item xs={1}>
        <Card sx={{ width: '70px', height: '70px' }}>
          <CardMedia
            component="img"
            image={imageUrl}
            alt="Music"
            sx={{ width: '100%', height: '100%' }}
            onClick={() => {
              navigate('/songinfo');
            }}
          />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
          <Button 
            sx={{ textAlign: 'left', color: 'black' }}
            onClick={() => {
              navigate(`/songinfo/${id}`, {
                state: {
                  id: id,
                  title: title,
                  img: image,
                  artist: artist,
                },
              });
            }}
          >{title}</Button>
          <Button sx={{ textAlign: 'left', color: 'gray' }}>{album}</Button>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box sx={{ display: 'flex', marginTop: '15px' }}>
          <Button sx={{ color: 'black' }}>{artist}</Button>
        </Box>
      </Grid>
      <Grid item xs={1}>
        <Box sx={{ display: 'flex', marginTop: '20px' }}>
          <MusicNoteIcon 
            onClick={() => {
              navigate('/musicpurchase');
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={1}>
        <Box sx={{ display: 'flex', marginTop: '20px' }}>
          <AudioFileIcon 
            onClick={() => {
              navigate('/NFTpurchase');
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
