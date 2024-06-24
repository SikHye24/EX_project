import React from 'react';
import { Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import Musicbox from '../Components/Musicbox';
import {useNavigate} from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

export default function MainPage() {
  const Navigate = useNavigate();

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
        if (err.message === '로그인이 필요합니다.') Navigate('/403');
        else Navigate('/404');
      });
  };

  useEffect(() => {
    getRes();
  }, []);


  const musicboxes = data.map((item, index) => (
    <Musicbox key={item.id} 
    props={item.image}
    title={item.title}
    artist={item.artist}
    id = {item.id}
    />
  ));

  const rows = [];
  for (let i = 0; i < musicboxes.length; i += 5) {
    rows.push(
      <Box key={i} sx={{ display: 'flex', flexDirection: 'row', gap: '20px', marginBottom: '20px' }}>
        {musicboxes.slice(i, i + 5)}
      </Box>
    );
  }

  return (
    <div>
      <Box sx={{marginLeft: '200px', marginRight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop : '30px' }}>
        <Box sx={{marginLeft: 'auto', marginRight: 'auto', maxWidth: 'fit-content'}}>
        <Button sx={{ color: 'black'}}
            onClick={()=>{
              Navigate('/library');
            }}
          >전체 보기</Button>
          {rows}
        </Box>
      </Box>
    </div>
  );
}