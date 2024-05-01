import React from 'react';
import { Box, Button, Card, CardMedia, Divider, } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { useNavigate } from 'react-router';

export default function SonginfoPage() {
  const Navigate = useNavigate();

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
      {/* 컴포넌트 분리 필요 (songinfo component)*/}
      <Box sx={{marginTop : '30px',marginLeft : '200px', marginRight : '200px', display : 'flex', flexDirection : 'column'}}>
        <h1>info</h1>
        <Box>
          <p1>곡명</p1>
          <p1 style={{marginLeft : '20px'}}>test-name</p1>
        </Box>
        <Box sx = {{marginTop : '10px'}}>
          <p1>작곡</p1>
          <p1 style={{marginLeft : '20px'}}>test-lyricist</p1>
        </Box>
        <Box sx = {{marginTop : '10px'}}>
          <p1>작사</p1>
          <p1 style={{marginLeft : '20px'}}>test-composer</p1>
        </Box>
        <Box sx = {{marginTop : '20px'}}>
          <p1>lyrics lyrics lyrics</p1>
        </Box>
      </Box>
    </div>
  );
}

