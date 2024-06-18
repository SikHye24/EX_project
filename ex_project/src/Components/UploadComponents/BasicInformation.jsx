import { Box, TextField } from '@mui/material';
import React from 'react';

export default function BasicInformation() {
  return (
    <div>
      <h1>기본 정보</h1>
      <Box sx ={{marginBottom : '15px'}}>
        <TextField id="title-basic" label="제목" variant="outlined"/>
      </Box>
      <Box sx ={{marginBottom : '15px'}}>
        <TextField id="album-basic" label="앨범" variant="outlined"/>
      </Box>
      <Box sx ={{marginBottom : '15px'}}>
        <textarea
        required
        rows="10"
        cols="60"
        placeholder='가사'
        />
      </Box>
    </div>
  );
}

