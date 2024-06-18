import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import AlbumUpload from '../Components/UploadComponents/AlbumUpload';
import { ImageProvider, useImageContext } from '../Context/ImageProvider';
import BasicInformation from '../Components/UploadComponents/BasicInformation';
import NFTInformation from '../Components/UploadComponents/NFTInformation';
import MusicFile from '../Components/UploadComponents/MusicFile';

export default function UploadPage() {
  const Navigate = useNavigate();
  const { image , setImage} = useImageContext();

  const [page, setPage] = useState(1);

  const ChangeNextPage = () => {
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
              borderRadius : '100%',
              width : '60px',
              height : '60px',
              minWidth : '0',
              padding : '0',
              marginRight : '20px',
              '&:disabled': {
                backgroundColor: page === 1 ? '#0064FF' : 'lightgray',
                color: page === 1 ? 'white' : 'gray'
              },
            }}
          >1</Button>
          <Button
            disabled
            sx={{
              borderRadius : '100%',
              width : '60px',
              height : '60px',
              minWidth : '0',
              padding : '0',
              marginRight : '20px',
              '&:disabled': {
                backgroundColor: page === 2 ? '#0064FF' : 'lightgray',
                color: page === 2 ? 'white' : 'gray'
              },
            }}
          >2</Button>
          <Button 
            disabled
            sx={{
              borderRadius : '100%',
              width : '60px',
              height : '60px',
              minWidth : '0',
              padding : '0',
              marginRight : '20px',
              '&:disabled': {
                backgroundColor: page === 3 ? '#0064FF' : 'lightgray',
                color: page === 3 ? 'white' : 'gray'
              },
            }}
          >3</Button>
          <Button
            disabled
            sx={{
              borderRadius : '100%',
              width : '60px',
              height : '60px',
              minWidth : '0',
              padding : '0',
              '&:disabled': {
                backgroundColor: page === 4 ? '#0064FF' : 'lightgray',
                color: page === 4 ? 'white' : 'gray'
              },
            }}
          >4</Button>
        </Box>
        <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
          {page === 1 && <AlbumUpload/>}
          {page === 2 && <BasicInformation/>}
          {page === 3 && <NFTInformation/>}
          {page === 4 && <MusicFile/>}
        </Box>
        <Box sx = {{ marginTop : '50px',marginRight : '200px',marginLeft : 'auto', marginBottom : '30px' }}>
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

