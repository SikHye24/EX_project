import React from 'react';
import {Card, CardMedia} from '@mui/material';

export default function Musicbox({props}) {
  return (
    <Card sx={{width : '200px', height : '200px'}}>
      <CardMedia 
        component="img"
        image={props}
        alt="Music"
        sx={{ width: '100%', height: '100%' }}
      />
    </Card>
  );
}

