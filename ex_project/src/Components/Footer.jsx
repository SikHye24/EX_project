import React from 'react';
import {Box} from '@mui/material';

export default function Footer() {
  return (
    <div>
      <Box sx={{position : 'fixed', bottom : '0', justifyContent : 'center', padding : '10px 0'}}>
        <h1>Footer</h1>
      </Box>
    </div>
  );
}

