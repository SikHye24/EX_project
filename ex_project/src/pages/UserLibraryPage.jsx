import React, { useState } from 'react';
import { Box, Grid, Divider, Button } from '@mui/material';
import Musiclist from '../Components/Musiclist';

export default function UserLibraryPage() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div>
      <Box sx={{marginLeft: '200px', marginRight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center',backgroundColor : 'white', marginTop : '30px' }}>
        <Box sx={{dispaly : 'flex', flexDirection : 'row'}}>
          <Button
            sx={{
              color: selectedButton === 'NFT' ? '#0064FF' : 'white',
              bgcolor: selectedButton === 'NFT' ? 'white' : '#0064FF',
              borderRadius: '50px',
            }}
            onClick={() => handleButtonClick('NFT')}
          >
            NFT
          </Button>
          <Button
            sx={{
              color: selectedButton === '음원' ? '#0064FF' : 'white',
              bgcolor: selectedButton === '음원' ? 'white' : '#0064FF',
              borderRadius: '50px',
            }}
              onClick={() => handleButtonClick('음원')}
          >
            음원
          </Button>
        </Box>
        <h1>내가 발매한 항목</h1>
        <Grid item xs={10} sm={6} md={4}>
        <Grid container spacing={2}>
          <Grid item xs={7} sx={{whiteSpace: 'nowrap'}}>
            <p1>곡/앨범</p1>
          </Grid>
          <Grid item xs={3} sx={{whiteSpace: 'nowrap'}}>
            <p1>아티스트</p1>
          </Grid>
          <Grid item xs={1} sx={{whiteSpace: 'nowrap'}}>
            <p1>NFT 생성</p1>
          </Grid>
          <Grid item xs={1} sx={{whiteSpace: 'nowrap'}}>
            <p1>NFT 상태</p1>
          </Grid>
        </Grid>
        <Divider sx={{marginTop:'10px',marginBottom: '10px'}} />
        </Grid>
        <Musiclist 
        image="https://t1.daumcdn.net/thumb/R720x0.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/8fXh/image/0_JTh3JET7ZCHaT_IJhG4VbhEpI.png"
        title={"test"}
        artist={"test-artsit"}
        album={"test-album"}
      />
      </Box>
      <Box sx={{marginLeft: '200px', marginRight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center',backgroundColor : 'white', marginTop : '30px' }}>
        <h1>소유중인 항목</h1>
        <Grid item xs={10} sm={6} md={4}>
        <Grid container spacing={2}>
          <Grid item xs={7} sx={{whiteSpace: 'nowrap'}}>
            <p1>곡/앨범</p1>
          </Grid>
          <Grid item xs={3} sx={{whiteSpace: 'nowrap'}}>
            <p1>아티스트</p1>
          </Grid>
          <Grid item xs={1} sx={{whiteSpace: 'nowrap'}}>
            <p1></p1>
          </Grid>
          <Grid item xs={1} sx={{whiteSpace: 'nowrap'}}>
            <p1>판매상태</p1>
          </Grid>
        </Grid>
        <Divider sx={{marginTop:'10px',marginBottom: '10px'}} />
        </Grid>
        <Musiclist 
        image="https://t1.daumcdn.net/thumb/R720x0.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/8fXh/image/0_JTh3JET7ZCHaT_IJhG4VbhEpI.png"
        title={"test"}
        artist={"test-artsit"}
        album={"test-album"}
      />
      </Box>
    </div>
  );
}

