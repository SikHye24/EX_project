import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router';
import AlbumUpload from '../Components/UploadComponents/AlbumUpload';
import BasicInformation from '../Components/UploadComponents/BasicInformation';
import NFTInformation from '../Components/UploadComponents/NFTInformation';
import MusicFile from '../Components/UploadComponents/MusicFile';

export default function UploadPage() {
  const navigate = useNavigate();
  
  const [page, setPage] = useState(1);
  const [albumImage, setAlbumImage] = useState(null);
  const [basicInfo, setBasicInfo] = useState({
    title: '',
    artist: '',
    genre: '',
    album: '',
    lyrics: '',
  });
  const [nftInfo, setNftInfo] = useState([
    { id: 1, type: '저작권 유형 1', fields: [{ id: 1, owner: '', percentage: '' }] },
    { id: 2, type: '저작권 유형 2', fields: [{ id: 1, owner: '', percentage: '' }] },
    { id: 3, type: '저작권 유형 3', fields: [{ id: 1, owner: '', percentage: '' }] },
  ]);
  const [musicFile, setMusicFile] = useState(null);

  const ChangeNextPage = () => {
    setPage(page + 1);
    console.log(page);
  };

  const ChangePreviousPage = () => {
    setPage(page - 1);
  };

  return (
    <div>
      <Box sx={{ marginLeft: '200px', marginRight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white', marginTop: '30px' }}>
        <Box sx={{ marginTop: '30px' }}>
          <h1>음원 업로드</h1>
        </Box>
        <Box sx={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '40px' }}>
          {[1, 2, 3, 4].map((num) => (
            <Button
              key={num}
              disabled
              sx={{
                borderRadius: '100%',
                width: '60px',
                height: '60px',
                minWidth: '0',
                padding: '0',
                marginRight: '20px',
                '&:disabled': {
                  backgroundColor: page === num ? '#0064FF' : 'lightgray',
                  color: page === num ? 'white' : 'gray'
                },
              }}
            >
              {num}
            </Button>
          ))}
        </Box>
        <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
          {page === 1 && <AlbumUpload image={albumImage} setImage={setAlbumImage} />}
          {page === 2 && <BasicInformation basicInfo={basicInfo} setBasicInfo={setBasicInfo} />}
          {page === 3 && <NFTInformation nftInfo={nftInfo} setNftInfo={setNftInfo} />}
          {page === 4 && <MusicFile musicFile={musicFile} setMusicFile={setMusicFile} />}
        </Box>
        <Box sx={{ marginTop: '50px', marginRight: '200px', marginLeft: 'auto', marginBottom: '30px' }}>
          {page > 1 && <Button onClick={ChangePreviousPage}>이전</Button>}
          {page < 4 && <Button onClick={ChangeNextPage}>다음</Button>}
          {page === 4 && <Button onClick={() => console.log({ albumImage, basicInfo, nftInfo, musicFile })}>업로드</Button>}
        </Box>
      </Box>
    </div>
  );
}
