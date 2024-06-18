import React, { useState } from 'react';
import { Card, Box, Typography } from '@mui/material';
import { useImageContext } from '../../Context/ImageProvider';

export default function AlbumUpload() {
  const { img, setImg, setImgError } = useImageContext();

  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
      setError('');
    } else {
      setError('올바른 이미지 파일을 드롭해주세요.');
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div>
      <h2>앨범 이미지 선택</h2>
    <Box
    sx={{
      width: '400px',
      height: '300px',
      border: '2px dashed gray',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto',
      marginTop: '50px',
      backgroundColor: '#f9f9f9',
    }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {!image ? (
        <Typography>앨범 이미지를 여기로 드래그 앤 드롭하세요</Typography>
      ) : (
        <Card sx={{ width: '100%', height: '100%', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </Card>
      )}
      {error && <Typography color="error">{error}</Typography>}
    </Box>
    </div>
  );
}

