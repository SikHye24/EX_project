import { Box } from '@mui/material';
import React from 'react';

export default function Error404() {
  return (
    <div>
      <Box sx = {{justifyContent : 'center', display : 'flex', marginTop : '100px'}}>
        <h1>404 NOT FOUND</h1>
      </Box>
    </div>
  );
}

