import React from 'react';
import { Box, Button } from '@mui/material';
import Musicbox from '../Components/Musicbox';
import {useNavigate} from 'react-router-dom';

export default function MainPage() {
  const Navigate = useNavigate();

  const musicboxes = Array.from({ length: 10 }, (_, index) => (
    <Musicbox key={index} props="https://t1.daumcdn.net/thumb/R720x0.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/8fXh/image/0_JTh3JET7ZCHaT_IJhG4VbhEpI.png"
    title={"test"}
    artist={"test_artist"}/>
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