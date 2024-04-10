import React from 'react';
import {Box ,Button ,Card, CardMedia} from '@mui/material';

export default function Musicbox({props,title,artist}) {
  return (
    <div>
    <Card sx={{width : '200px', height : '200px'}}>
      <CardMedia 
        component="img"
        image={props}
        alt="Music"
       sx={{ width: '100%', height: '100%' }}
     />
    </Card>
    <Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button sx={{color:"black", marginRight : "auto"}}>{title}</Button>
        <Button sx={{color:"black", marginRight : "auto"}}>{artist}</Button>
      </Box>
    </Box>
    </div>
  );
}

