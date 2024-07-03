import React from 'react';
import { Box, Typography, Input } from '@mui/material';

export default function MusicFile({ musicFile, setMusicFile }) {
  const handleFileChange = (event) => {
    setMusicFile(event.target.files[0]);
  };

  return (
    <Box sx={{ padding: 2, textAlign: 'center' }}>
      <h1>음원 원본 파일</h1>
      <Box sx = {{ marginTop : '100px'}}>
        <Input type="file" inputProps={{ accept: 'audio/*' }} onChange={handleFileChange} />
        {musicFile && (
          <Box sx = {{marginTop : '60px'}}>
            <Box>
              <h2>선택된 음원</h2>
            </Box>
            <Typography variant="body1" sx={{ marginTop: 1 }}>
            {musicFile.name}
          </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
