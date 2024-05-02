import React, { useState } from 'react';
import { Box, Button, Card, CardMedia, Divider, FormControl, InputLabel, MenuItem, Select, TextField, } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { useNavigate } from 'react-router';

export default function NFTpurchasePage() {
  const Navigate = useNavigate();

  const [NFT, setNFT] = useState('');
  const [blockchain, setBlockchain] = useState('');
  const [price, setPrice] = useState('0.005 ETH');

  const handleNFTChange = (event) => {
    setNFT(event.target.value);
  }
  const handleblockchainChange = (event) => {
    setBlockchain(event.target.value);
  }

  return (
    <div>
      <Box sx={{marginTop : '50px',marginLeft : '200px', marginRight : '200px', display : 'flex', flexDirection : 'row'}}>
        <Card sx={{width : '200px', height : '200px'}}>
        <CardMedia 
          component="img"
          image="https://t1.daumcdn.net/thumb/R720x0.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/8fXh/image/0_JTh3JET7ZCHaT_IJhG4VbhEpI.png"
          alt="Music"
          sx={{ width: '100%', height: '100%' }}
        />
        </Card>
        <Box sx = {{marginLeft : '30px', display : 'flex', flexDirection : 'column'}}>
          <h1>test</h1>
          <Button sx = {{color : 'black'}}>test-artist</Button>
          <Button sx = {{color : 'gray'}}>test-album</Button>
          <Box sx = {{display : 'flex', flexDirection : 'row', marginTop : '20px'}}>
            <ContentPasteIcon
              sx = {{marginRight : '10px'}}
              onClick = {() => {
                Navigate('/songinfo')
              }}
            />
            <MusicNoteIcon 
              sx = {{marginRight : '10px'}}
              onClick = {()=>{
                Navigate('/musicpurchase')
              }}
            />
            <AudioFileIcon 
              onClick = {() => {
                Navigate('/nftpurchase')
              }}
            />
          </Box>
        </Box>
      </Box>
      <Divider sx={{marginTop : '50px',marginLeft : '200px', marginRight : '200px'}}/>
      <Box sx={{marginTop : '30px',marginLeft : '500px', marginRight : '500px', display : 'flex', flexDirection : 'column'}}>
        <Box sx={{martingBottom : '10px'}}>
          <h1>NFT 구매</h1>
        </Box>
        <FormControl fullWidth>
          <InputLabel id = "NFT-select-label">NFT를 선택하세요</InputLabel>
          <Select
            labelId = 'NFT-select-label'
            id = 'NFT-select'
            value = {NFT}
            label = 'NFT'
            onChange={handleNFTChange}
            sx={{width: '100%'}}
          >
            <MenuItem value = {1}>NFT 1</MenuItem>
            <MenuItem value = {2}>NFT 2</MenuItem>
            <MenuItem value = {3}>NFT 3</MenuItem>
          </Select>
        </FormControl>
        <TextField sx={{marginTop : '20px'}}
          value = {price}
          disabled
        />
        <Box sx={{marginTop : '10px'}}>
          <p1 style={{color : 'gray'}}>*트랜잭션 비용은 별도입니다</p1>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'row', marginTop: '20px'}}>
          <TextField sx={{width: '60%'}} 
            label="구매가 입력"
          />
          <FormControl sx={{width: '20%', marginLeft: '10px'}}>
            <InputLabel id="blockchain-select-label"></InputLabel>
            <Select
              labelId="blockchain-select-label"
              id="blockchain-select"
              value={blockchain}
              onChange={handleblockchainChange}
              fullWidth
            >
              <MenuItem value={1}>ETH</MenuItem>
              <MenuItem value={2}>WEI</MenuItem>
            </Select>
          </FormControl>
          <Button sx={{width: '20%', marginLeft: '10px',color : 'white',backgroundColor : '#0064FF', fontSize : '17px'}}>NFT 구매</Button>
        </Box>
      </Box>
    </div>
  );
}
