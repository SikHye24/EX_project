import React, { useState } from 'react';
import { Box, Typography, Input } from '@mui/material';

export default function MusicFile() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <Box sx={{ padding: 2, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        음원 원본 파일
      </Typography>
      <Input
        type="file"
        inputProps={{ accept: 'audio/*' }}
        onChange={handleFileChange}
      />
      {selectedFile && (
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          {selectedFile.name}
        </Typography>
      )}
    </Box>
  );
}
