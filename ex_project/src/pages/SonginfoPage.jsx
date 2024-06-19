import React, { useState, useEffect } from 'react';
import { Box, Button, Card, CardMedia, Divider } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';

export default function SonginfoPage() {
  const navigate = useNavigate();
  const { id } = useParams(); // URL에서 id를 가져옵니다.
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('jwtToken');

  useEffect(() => {
    const getRes = async () => {
      setLoading(true);
      await axios
        .get(`http://${process.env.REACT_APP_BACKEND_URL}/api/v1/music/${id}`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          setData(res.data.data);
          console.log(res.data.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          navigate('/403');
        });
    };
    getRes();
  }, [id, token, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const isBase64 = (str) => {
    try {
      return btoa(atob(str)) === str;
    } catch (err) {
      return false;
    }
  };

  const imageUrl = isBase64(data.image) ? `data:image/jpeg;base64,${data.image}` : data.image;

  return (
    <div>
      <Box sx={{ marginTop: '50px', marginLeft: '200px', marginRight: '200px', display: 'flex', flexDirection: 'row' }}>
        <Card sx={{ width: '200px', height: '200px' }}>
          <CardMedia 
            component="img"
            image={imageUrl}
            alt="Music"
            sx={{ width: '100%', height: '100%' }}
          />
        </Card>
        <Box sx={{ marginLeft: '30px', display: 'flex', flexDirection: 'column' }}>
          <h1>{data.title}</h1>
          <Button sx={{ color: 'black' }}>{data.artist}</Button>
          <Button sx={{ color: 'gray' }}>{data.album}</Button>
          <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
            <ContentPasteIcon
              sx={{ marginRight: '10px' }}
              onClick={() => {
                navigate('/songinfo');
              }}
            />
            <MusicNoteIcon 
              sx={{ marginRight: '10px' }}
              onClick={() => {
                navigate('/musicpurchase');
              }}
            />
            <AudioFileIcon 
              onClick={() => {
                navigate('/nftpurchase');
              }}
            />
          </Box>
        </Box>
      </Box>
      <Divider sx={{ marginTop: '50px', marginLeft: '200px', marginRight: '200px' }} />
      {/* 컴포넌트 분리 필요 (songinfo component) */}
      <Box sx={{ marginTop: '30px', marginLeft: '200px', marginRight: '200px', display: 'flex', flexDirection: 'column' }}>
        <h1>info</h1>
        <Box>
          <p>곡명</p>
          <p style={{ marginLeft: '20px' }}>{data.title}</p>
        </Box>
        <Box sx={{ marginTop: '10px' }}>
          <p>작곡</p>
          <p style={{ marginLeft: '20px' }}>{data.composer}</p>
        </Box>
        <Box sx={{ marginTop: '10px' }}>
          <p>작사</p>
          <p style={{ marginLeft: '20px' }}>{data.lyricist}</p>
        </Box>
        <Box sx={{ marginTop: '20px' }}>
          <p>{data.lyrics}</p>
        </Box>
      </Box>
    </div>
  );
}


