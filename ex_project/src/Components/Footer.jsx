import React from 'react';
import {Box} from '@mui/material';

export default function Footer() {
  return (
    <div>
      <Box sx={{position : 'fixed', width : '100%', height : '60px',bottom : '0', justifyContent : 'center', padding : '10px 0', backgroundColor : 'white'}}>
        <h1>Footer</h1>
      </Box>
    </div>
  );
}

