import React from 'react';
import {Box ,Button ,Card, CardMedia} from '@mui/material';
import { useNavigate } from 'react-router';

export default function Musicbox({props,title,artist}) {
  const Navigate = useNavigate();
  return (
    <div>
    <Card sx={{width : '200px', height : '200px'}}>
      <CardMedia 
        component="img"
        image={props}
        alt="Music"
        sx={{ width: '100%', height: '100%' }}
        onClick={() => {
          Navigate('/songinfo');
        }}
     />
    </Card>
    <Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button 
          sx={{color:"black", marginRight : "auto"}}
          onClick={() => {
            Navigate('/songinfo');
          }}
        >{title}</Button>
        <Button sx={{color:"gray", marginRight : "auto"}}>{artist}</Button>
      </Box>
    </Box>
    </div>
  );
}

