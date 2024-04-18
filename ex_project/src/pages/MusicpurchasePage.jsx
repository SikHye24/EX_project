import React from 'react';
import { Divider ,Box, Card, CardMedia, Button, Select, MenuItem } from '@mui/material';

export default function MusicpurchasePage() {

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
          </Box>
      </Box>
      <Divider sx={{marginTop : '50px',marginLeft : '200px', marginRight : '200px'}}/>
      <Box sx={{backgroundColor : 'gray',marginTop : '10px',marginLeft : '200px', marginRight : '200px', display : 'flex', flexDirection : 'row'}}>
        <Select>
          <MenuItem>판매자 1</MenuItem>
        </Select>
      </Box>
    </div>
  );
}

