import React, { useState, useEffect } from 'react';
import { Box, Grid, Divider, Button } from '@mui/material';
import LibraryNFTMusiclist from '../Components/LibraryNFTMusiclist';
import LibraryMusiclist from '../Components/LibraryMusiclist';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function UserLibraryPage() {
  const [selectedButton, setSelectedButton] = useState('NFT');
  const [purchaseData, setPurchaseData] = useState([]);
  const [uploadData, setUploadData] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('jwtToken');

  useEffect(() => {
    getPurchaseRes();
    getUploadDataRes();
  }, []);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const isBase64 = (str) => {
    try {
      return btoa(atob(str)) === str;
    } catch (err) {
      return false;
    }
  };

  const getPurchaseRes = async () => {
    await axios
      .get(`http://${process.env.REACT_APP_BACKEND_URL}/api/v1/purchase`, {
        headers: {
          authorization: `${token}`,
        },
      })
      .then((res) => {
        setPurchaseData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        navigate('/403');
      });
  };

  const getUploadDataRes = async () => {
    await axios
      .get(`http://${process.env.REACT_APP_BACKEND_URL}/api/v1/upload`, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setUploadData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        navigate('/403');
      });
  };

  return (
    <div>
      <Box sx={{marginLeft: '200px', marginRight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center',backgroundColor : 'white', marginTop : '30px' }}>
        <Box sx={{dispaly : 'flex', flexDirection : 'row'}}>
          <Button
            sx={{
              bgcolor: selectedButton === 'NFT' ? '#0064FF' : 'white',
              color: selectedButton === 'NFT' ? 'white' : '#0064FF',
              borderRadius: '50px',
            }}
            onClick={() => handleButtonClick('NFT')}
          >
            NFT
          </Button>
          <Button
            sx={{
              bgcolor: selectedButton === '음원' ? '#0064FF' : 'white',
              color: selectedButton === '음원' ? 'white' : '#0064FF',
              borderRadius: '50px',
            }}
              onClick={() => handleButtonClick('음원')}
          >
            음원
          </Button>
        </Box>
        {selectedButton === 'NFT' ? (
          <div>
            <h1>내가 발매한 항목</h1>
            <Grid item xs={10} sm={6} md={4}>
              <Grid container spacing={2}>
                <Grid item xs={7} sx={{whiteSpace: 'nowrap'}}>
                  <p>곡/앨범</p>
                </Grid>
                <Grid item xs={3} sx={{whiteSpace: 'nowrap'}}>
                  <p>아티스트</p>
                </Grid>
                <Grid item xs={1} sx={{whiteSpace: 'nowrap'}}>
                  <p>NFT 생성</p>
                </Grid>
                <Grid item xs={1} sx={{whiteSpace: 'nowrap'}}>
                  <p>NFT 상태</p>
                </Grid>
              </Grid>
              <Divider sx={{marginTop:'10px',marginBottom: '10px'}} />
            </Grid>
            {uploadData.map((item, index) => {
              const imageUrl = isBase64(item.image) ? `data:image/jpeg;base64,${item.image}` : item.image;
              return (
                <React.Fragment key={item.id}>
                  <LibraryNFTMusiclist
                    image={imageUrl}
                    title={item.title}
                    artist={item.artist}
                    album={item.album}
                    Ismine={'true'}
                    id={item.id}  // id를 전달
                  />
                  {index !== uploadData.length - 1 && <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />}
                </React.Fragment>
              );
            })}
            <Box sx={{marginTop : '30px'}}>
              <h1>소유중인 항목</h1>
              <Grid item xs={10} sm={6} md={4}>
                <Grid container spacing={2}>
                  <Grid item xs={7} sx={{whiteSpace: 'nowrap'}}>
                    <p>곡/앨범</p>
                  </Grid>
                  <Grid item xs={3} sx={{whiteSpace: 'nowrap'}}>
                    <p>아티스트</p>
                  </Grid>
                  <Grid item xs={1} sx={{whiteSpace: 'nowrap'}}>
                    <p></p>
                  </Grid>
                  <Grid item xs={1} sx={{whiteSpace: 'nowrap'}}>
                    <p>판매상태</p>
                  </Grid>
                </Grid>
                <Divider sx={{marginTop:'10px',marginBottom: '10px'}} />
              </Grid>
              {purchaseData.map((item, index) => {
                const imageUrl = isBase64(item.image) ? `data:image/jpeg;base64,${item.image}` : item.image;
                return (
                  <React.Fragment key={item.id}>
                    <LibraryNFTMusiclist 
                      image={imageUrl}
                      title={item.title}
                      artist={item.artist}
                      album={item.album}
                      Ismine={'false'}
                      id={item.id}  // id를 전달
                    />
                    {index !== purchaseData.length - 1 && <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />}
                  </React.Fragment>
                );
              })}
            </Box>
          </div>
        ) : (
          <div>
            <h1>내가 보유한 음원</h1>
            <Grid item xs={10} sm={6} md={4}>
              <Grid container spacing={2}>
                <Grid item xs={7} sx={{whiteSpace: 'nowrap'}}>
                  <p>곡/앨범</p>
                </Grid>
                <Grid item xs={3} sx={{whiteSpace: 'nowrap'}}>
                  <p>아티스트</p>
                </Grid>
                <Grid item xs={2} sx={{whiteSpace: 'nowrap'}}>
                  <p>다운로드</p>
                </Grid>
              </Grid>
              <Divider sx={{marginTop:'10px',marginBottom:'10px'}} />
            </Grid>
            {purchaseData.map((item, index) => {
              const imageUrl = isBase64(item.image) ? `data:image/jpeg;base64,${item.image}` : item.image;
              return (
                <React.Fragment key={item.id}>
                  <LibraryMusiclist
                    image={imageUrl}
                    title={item.title}
                    artist={item.artist}
                    album={item.album}
                    id={item.id}  // id를 전달
                  />
                  {index !== purchaseData.length - 1 && <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />}
                </React.Fragment>
              );
            })}
          </div>
        )}
      </Box>
    </div>
  );
}
