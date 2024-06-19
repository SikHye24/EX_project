import { Box } from '@mui/material';
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const [data, setData] = useState('');

  const getRes = async () => {
    const token = localStorage.getItem('jwtToken');
    await axios
      .get(`http://${process.env.REACT_APP_BACKEND_URL}/api/v1/user`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data);
        const { id, name, nickname, password, wallet } = res.data.data;
        setData({ id, name, nickname, password , wallet});
      });
  };

  useEffect(() => {
    getRes();
  }, []);

  return (
    <div>
      <Box sx={{marginLeft: '200px', marginRight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center',backgroundColor : 'white' }}>
        <h1>사용자 정보</h1>
        <Box sx={{border : '1px solid gray', borderRadius : '5px'}}>
          <Box sx = {{padding : '10px'}}>
            <h2>사용자 이름</h2>
            <p1>{data.name}</p1>
            <h2>사용자 지갑주소</h2>
            <p1>{data.wallet}</p1>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

