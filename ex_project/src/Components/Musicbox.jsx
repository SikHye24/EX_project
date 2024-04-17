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
          // 상세페이지 이동으로 수정 필요
          Navigate('/library');
        }}
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

