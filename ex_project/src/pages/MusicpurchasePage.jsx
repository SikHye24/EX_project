import React, { useState, useEffect } from 'react';
import { Divider, Box, Card, CardMedia, Button, TextField } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';

export default function MusicpurchasePage() {
  const navigate = useNavigate();
  const { id } = useParams(); // URL에서 id를 가져옵니다.
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState(10); // 가격을 설정할 변수
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
          setPrice(res.data.data.price); // API에서 가격 정보가 제공되는 경우
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
                navigate(`/songinfo/${data.id}`);
              }}
            />
            <MusicNoteIcon
              sx={{ marginRight: '10px' }}
              onClick={() => {
                navigate(`/musicpurchase/${data.id}`);
              }}
            />
            <AudioFileIcon
              onClick={() => {
                navigate(`/nftpurchase/${data.id}`);
              }}
            />
          </Box>
        </Box>
      </Box>
      <Divider sx={{ marginTop: '50px', marginLeft: '200px', marginRight: '200px' }} />
      <Box sx={{ marginTop: '30px', marginLeft: '500px', marginRight: '500px', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ marginBottom: '10px' }}>
          <h1>음원 구매</h1>
        </Box>
        <h2>음원 가격</h2>
        <TextField
          value={price}
          disabled
        />
        <Button sx={{ width: 'fullwidth', height: '50px', marginTop: '10px', color: 'white', backgroundColor: '#0064FF' }}>음원 구매</Button>
      </Box>
    </div>
  );
}
