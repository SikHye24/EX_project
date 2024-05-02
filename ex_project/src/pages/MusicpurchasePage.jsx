import React, { useState } from 'react';
import { Divider ,Box, Card, CardMedia, Button, TextField } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { useNavigate } from 'react-router';

export default function MusicpurchasePage() {
  const Navigate = useNavigate();

  const [price, setPrice] = useState(10);

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
          <h1>음원 구매</h1>
        </Box>
        <h2>음원 가격</h2>
        <TextField
          value = {price}
          disabled
        />
        <Button sx={{width : 'fullwidth', height : '50px',marginTop : '10px', color : 'white', backgroundColor : '#0064FF'}}>음원 구매</Button>
      </Box>
    </div>
  );
}

