import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

export default function NFTInformation() {
  const [copyright1, setCopyright1] = useState(1);
  const [copyright2, setCopyright2] = useState(1);
  const [copyright3, setCopyright3] = useState(1);


  return (
    <div>
      <h1>저작권 비율</h1>
      <Box sx = {{marginLeft: '200px', marginRight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center',backgroundColor : 'white', marginTop : '50px'}}>
        <Box sx={{display : 'flex',flexDirection : 'column', marginBottom : '30px'}}>
          <h2>저작권 유형 1</h2>
          <Box>
          <Button>+</Button>
          <TextField id="title-basic" label="저작권자" variant="outlined"
            sx = {{marginLeft : '30px'}}
          />
          <Button sx = {{marginLeft : '30px'}}>검색</Button>
          <TextField id="title-basic" label="저작 비율 (%딘위)" variant="outlined"
            sx = {{marginLeft : '30px'}}
          />
          </Box>
        </Box>
        <Box sx={{display : 'flex',flexDirection : 'column', maringBottom : '30px'}}>
          <h2>저작권 유형 2</h2>
          <Box>
          <Button>+</Button>
          <TextField id="title-basic" label="저작권자" variant="outlined"
            sx = {{marginLeft : '30px'}}
          />
          <Button sx = {{marginLeft : '30px'}}>검색</Button>
          <TextField id="title-basic" label="저작 비율 (%딘위)" variant="outlined"
            sx = {{marginLeft : '30px'}}
          />
          </Box>
        </Box>
        <Box sx={{display : 'flex',flexDirection : 'column', marginTop : '30px'}}>
          <h2>저작권 유형 3</h2>
          <Box>
          <Button>+</Button>
          <TextField id="title-basic" label="저작권자" variant="outlined"
            sx = {{marginLeft : '30px'}}
          />
          <Button sx = {{marginLeft : '30px'}}>검색</Button>
          <TextField id="title-basic" label="저작 비율 (%딘위)" variant="outlined"
            sx = {{marginLeft : '30px'}}
          />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

