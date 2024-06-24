import React from 'react';
import { Box, Grid, Divider } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Musiclist from '../Components/Musiclist';
import { jwtDecode } from 'jwt-decode';  // 여기 수정
import { useNavigate } from 'react-router';

export default function LibraryPage() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const token = localStorage.getItem('jwtToken');
  try {
    const decoded = jwtDecode(token);
    localStorage.setItem('type', decoded.type);
    localStorage.setItem('userId', decoded.id);
  } catch (err) {
    console.log('error: ' + err);
  }

  const getRes = async () => {
    await axios
      .get(`http://${process.env.REACT_APP_BACKEND_URL}/api/v1/music/chart?genre=All`)
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.message === '로그인이 필요합니다.') navigate('/403');
        else navigate('/404');
      });
  };

  useEffect(() => {
    getRes();
  }, []);

  const musiclists = data.map((item, index) => (
    <React.Fragment key={item.id}>
      <Musiclist 
        image={item.image}
        title={item.title}
        artist={item.artist}
        album={item.genre}
        id={item.id}
      />
      {index !== data.length - 1 && <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />}
    </React.Fragment>
  ));

  return (
    <div>
      <Box sx={{ marginLeft: '200px', marginRight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white' }}>
        <h1>음원 차트</h1>
        <Divider sx={{ marginBottom: '10px' }} />
        <Grid item xs={10} sm={6} md={4}>
          <Grid container spacing={2}>
            <Grid item xs={7} sx={{ whiteSpace: 'nowrap' }}>
              <p>곡/앨범</p>
            </Grid>
            <Grid item xs={3} sx={{ whiteSpace: 'nowrap' }}>
              <p>아티스트</p>
            </Grid>
            <Grid item xs={1} sx={{ whiteSpace: 'nowrap' }}>
              <p>음원구매</p>
            </Grid>
            <Grid item xs={1} sx={{ whiteSpace: 'nowrap' }}>
              <p>NFT구매</p>
            </Grid>
          </Grid>
          <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />
        </Grid>
      </Box>
      <Box sx={{ marginLeft: '200px', marginRight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white', marginBottom: '30px' }}>
        {musiclists}
        <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />
      </Box>
    </div>
  );
}
