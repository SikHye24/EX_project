import { Box, TextField } from '@mui/material';
import React from 'react';

export default function BasicInformation({ basicInfo, setBasicInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBasicInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h1>기본 정보</h1>
      <Box sx={{ marginBottom: '15px' }}>
        <TextField id="title-basic" label="제목" variant="outlined" name="title" value={basicInfo.title} onChange={handleChange} />
      </Box>
      <Box sx={{ marginBottom: '15px' }}>
        <TextField id="album-basic" label="아티스트" variant="outlined" name="artist" value={basicInfo.artist} onChange={handleChange} />
      </Box>
      <Box sx={{ marginBottom: '15px' }}>
        <TextField id="album-basic" label="장르" variant="outlined" name="genre" value={basicInfo.genre} onChange={handleChange} />
      </Box>
      <Box sx={{ marginBottom: '15px' }}>
        <TextField id="album-basic" label="앨범" variant="outlined" name="album" value={basicInfo.album} onChange={handleChange} />
      </Box>
      <Box sx={{ marginBottom: '15px' }}>
        <textarea required rows="10" cols="60" placeholder="가사" name="lyrics" value={basicInfo.lyrics} onChange={handleChange} />
      </Box>
    </div>
  );
}
