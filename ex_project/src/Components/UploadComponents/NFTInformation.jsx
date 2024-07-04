import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';

export default function NFTInformation({ nftInfo, setNftInfo }) {
  const token = localStorage.getItem('jwtToken');
  const [searchTriggered, setSearchTriggered] = useState(false);

  const handleInputChange = (typeId, name, value) => {
    setNftInfo((prevFields) =>
      prevFields.map((field) =>
        field.id === typeId
          ? {
              ...field,
              fields: field.fields.map((f) => ({ ...f, [name]: value || '' })),
            }
          : field
      )
    );
  };

  const handleSearchClick = async (typeId) => {
    const searchValue = nftInfo.find((type) => type.id === typeId).fields[0].search;
    await axios
      .get(`http://${process.env.REACT_APP_BACKEND_URL}/api/v1/user?search=${searchValue}`, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        console.log(res.data.data[0].id);
        console.log(res.data.data[0].nickname);
        const id = res.data.data[0].id;
        const nickname = res.data.data[0].nickname;
        const wallet = res.data.data[0].wallet;
        setNftInfo((prevFields) =>
          prevFields.map((field) =>
            field.id === typeId
              ? {
                  ...field,
                  fields: field.fields.map((f) => ({ ...f, id, owner: nickname, wallet : wallet })),
                }
              : field
          )
        );
        setSearchTriggered(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   if (searchTriggered) {
  //     setSearchTriggered(false);
  //     // 리렌더링이 완료되었음을 확인하는 용도로 사용할 수 있습니다.
  //     console.log(nftInfo);
  //     console.log("리렌더링 완료");
  //   }
  // }, [searchTriggered]);

  return (
    <div>
      <h1>저작권 비율</h1>
      <Box
        sx={{
          marginLeft: '200px',
          marginRight: '200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: 'white',
          marginTop: '50px',
        }}
      >
        {nftInfo.map((type) => (
          <Box key={type.id} sx={{ marginBottom: '30px' }}>
            <h2>{type.type}</h2>
            {type.fields.map((field) => (
              <Box key={field.id || Math.random()} sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <TextField
                  label="저작권자"
                  variant="outlined"
                  value={field.owner || ''}
                  disabled
                  sx={{ marginLeft: '30px' }}
                />
                <TextField
                  label="검색"
                  variant="outlined"
                  value={field.search || ''}
                  onChange={(e) => handleInputChange(type.id, 'search', e.target.value)}
                  sx={{ marginLeft: '30px' }}
                />
                <Button sx={{ marginLeft: '30px' }} onClick={() => handleSearchClick(type.id)}>검색</Button>
                <TextField
                  label="저작 비율 (%단위)"
                  variant="outlined"
                  value={field.percentage || ''}
                  onChange={(e) => handleInputChange(type.id, 'percentage', e.target.value)}
                  sx={{ marginLeft: '30px' }}
                />
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </div>
  );
}
