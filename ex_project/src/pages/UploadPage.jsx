import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import AlbumUpload from '../Components/UploadComponents/AlbumUpload';

export default function UploadPage() {
  const Navigate = useNavigate();

  const [page, setPage] = useState(1);

  const ChangeNextPage = () =>{
    setPage(page + 1);
    console.log(page);
  };

  const ChangePreviousPage = () => {
    setPage(page - 1);
  }

  return (
    <div>
      <Box sx = {{marginLeft: '200px', marginRight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center',backgroundColor : 'white', marginTop : '30px' }}>
        <Box sx = {{marginTop : '30px'}}>
          <h1>음원 업로드</h1>
        </Box>
        <Box sx = {{marginLeft : 'auto', marginRight : 'auto', marginTop : '40px'}}>
          <Button
            disabled
            sx={{
              backgroundColor: 'lightgray',
              color: 'white',
              '&:disabled': {
                backgroundColor: 'darkgray',
                color: 'white',
              },
            }}
          >1</Button>
          <Button
            disabled
          >2</Button>
          <Button 
            disabled
          >3</Button>
          <Button
            disabled
          >4</Button>
        </Box>
        <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
          {page === 1 && <AlbumUpload/>}
          {page === 2 && <h1>2</h1>}
          {page === 3 && <h1>3</h1>}
          {page === 4 && <h1>4</h1>}
        </Box>
        <Box sx = {{ marginTop : '50px',marginRight : '200px',marginLeft : 'auto' }}>
          {page > 1 &&
            <Button
              onClick={ChangePreviousPage}
            >
              이전
            </Button>
          }
          {page < 4 &&
            <Button
              onClick={ChangeNextPage}
            >
              다음
            </Button>
          }
          {page === 4 &&
            <Button>
              업로드
            </Button>
          }
        </Box>
      </Box>
    </div>
  );
}

