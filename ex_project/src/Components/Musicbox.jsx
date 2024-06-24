import React from 'react';
import {Box ,Button ,Card, CardMedia} from '@mui/material';
import { useNavigate } from 'react-router';

export default function Musicbox({props,title,artist, id}) {
  const Navigate = useNavigate();

  const isBase64 = (str) => {
    try {
      return btoa(atob(str)) === str;
    } catch (err) {
      return false;
    }
  };

  const imageUrl = isBase64(props) ? `data:image/jpeg;base64,${props}` : props;

  return (
    <div>
    <Card sx={{width : '200px', height : '200px'}}>
      <CardMedia 
        component="img"
        image={imageUrl}
        alt="Music"
        sx={{ width: '100%', height: '100%' }}
        onClick={() => {
          Navigate(`/songinfo/${id}`);
        }}
     />
    </Card>
    <Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button 
          sx={{color:"black", marginRight : "auto"}}
          onClick={() => {
            Navigate(`/songinfo/${id}`);
          }}
        >{title}</Button>
        <Button sx={{color:"gray", marginRight : "auto"}}>{artist}</Button>
      </Box>
    </Box>
    </div>
  );
}

