import React, { useState, useEffect } from 'react';
import { Box, Grid, Button, Card, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router';
import axios from 'axios';

export default function LibraryNFTMusiclist({ image, title, artist, album, Ismine, id }) {
  const navigate = useNavigate();
  const [isMinted, setIsMinted] = useState(false);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('jwtToken');

  useEffect(() => {
    const checkMintedStatus = async () => {
      try {
        const response = await axios.get(`http://${process.env.REACT_APP_BACKEND_URL}/api/v1/nft/hasMinted`, {
          headers: {
            Authorization: token,
          },
          data: {
            musicId: id,
          },
        });
        setIsMinted(response.data.isMinted);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    checkMintedStatus();
  }, [id, token]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={1}>
        <Card sx={{ width: '70px', height: '70px' }}>
          <CardMedia
            component="img"
            image={image}
            alt="Music"
            sx={{ width: '100%', height: '100%' }}
            onClick={() => {
              navigate(`/songinfo/${id}`);
            }}
          />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
          <Button 
            sx={{ textAlign: 'left', color: 'black' }}
            onClick={() => {
              //발행 기능 추가
            }}
          >
            {title}
          </Button>
          <Button sx={{ textAlign: 'left', color: 'gray' }}>{album}</Button>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box sx={{ display: 'flex', marginTop: '15px' }}>
          <Button sx={{ color: 'black' }}>{artist}</Button>
        </Box>
      </Grid>
      <Grid item xs={1}>
        <Box sx={{ display: 'flex', marginTop: '20px' }}>
          {loading ? (
            <p>Loading...</p>
          ) : isMinted ? (
            <p1>발행됨</p1>
          ) : (
            <Button
              sx={{ textAlign: 'left'}}
              onClick={() => {
                navigate(`/mintNFT/${id}`);
              }}
            >
              발행하기
            </Button>
          )}
        </Box>
      </Grid>
      <Grid item xs={1}>
        <Box sx={{ display: 'flex', marginTop: '20px' }}>
          <p1>판매중</p1>
        </Box>
      </Grid>
    </Grid>
  );
}
