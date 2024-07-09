import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router';
import AlbumUpload from '../Components/UploadComponents/AlbumUpload';
import BasicInformation from '../Components/UploadComponents/BasicInformation';
import NFTInformation from '../Components/UploadComponents/NFTInformation';
import MusicFile from '../Components/UploadComponents/MusicFile';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { init, deployContract } from '../Services/contract';

export default function UploadPage() {
  const navigate = useNavigate();
  
  const [page, setPage] = useState(1);
  const [albumImage, setAlbumImage] = useState(null);
  const [albumImageSrc, setAlbumImageSrc] = useState(null); // Base64 인코딩된 이미지
  const [basicInfo, setBasicInfo] = useState({
    title: '',
    artist: '',
    genre: '',
    album: '',
    lyrics: '',
  });
  const [nftInfo, setNftInfo] = useState([
    { id: 1, type: '저작권 유형 1', fields: [{ id: '', owner: '', percentage: '', wallet: '' }] },
    { id: 2, type: '저작권 유형 2', fields: [{ id: '', owner: '', percentage: '', wallet: '' }] },
    { id: 3, type: '저작권 유형 3', fields: [{ id: '', owner: '', percentage: '', wallet: '' }] },
  ]);
  const [musicFile, setMusicFile] = useState(null);
  const [cid1, setCid1] = useState('');
  const token = localStorage.getItem('jwtToken');

  const handleImage = (imageFile) => {
    setAlbumImage(imageFile);
    encodeFileToBase64(imageFile);
  };

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        console.log('Encoded Base64 Image:', reader.result); // 디버그용 로그 추가
        setAlbumImageSrc(reader.result);
        resolve();
      };
      reader.onerror = () => {
        console.error('File reading has failed');
      };
    });
  };

  const ChangeNextPage = () => {
    setPage(page + 1);
    console.log(page);
  };

  const ChangePreviousPage = () => {
    setPage(page - 1);
  };

  // 메타데이터 업로드
  const createFormData = (postData) => {
    const formData = new FormData();
    for (const key in postData) {
      if (key === 'composerId' || key === 'songWriterId') {
        formData.append(key, JSON.stringify(postData[key])); // JSON 문자열로 변환
      } else if (Array.isArray(postData[key])) {
        postData[key].forEach((item, index) => {
          formData.append(`${key}[${index}]`, item);
        });
      } else {
        formData.append(key, postData[key]);
      }
    }
    if (albumImage) {
      formData.append('image', albumImage); // 이미지 파일 추가
    }
    return formData;
  };

  const handlePostMeta = async () => {
    const { name: artist, id: artistId } = jwtDecode(token); // jwtDecode 사용
    const { title, album, lyrics } = basicInfo;
    const genre = basicInfo.genre;  // Assuming genre is part of basicInfo
    const composerId = nftInfo.find(type => type.id === 1).fields.map(field => field.id);
    const songWriterId = nftInfo.find(type => type.id === 2).fields.map(field => field.id);
    const postData = { title, artistId, artist, album, lyrics, genre, composerId, songWriterId };

    console.log('image data');
    console.log(albumImage);

    try {
      console.log('get response');
      console.log(postData);
      const response = await axios({
        method: 'post',
        url: `http://${process.env.REACT_APP_BACKEND_URL}/api/v1/upload/meta`,
        headers: { authorization: token },
        data: createFormData(postData),
      });

      console.log(response.data.data.cid1);
      setCid1(response.data.data.cid1);
      return response.data.data.cid1;
    } catch (err) {
      console.error(err);
    }
  };

  //SettleAddr 
  const getSettleAddr = async () => {
    if (!cid1) {
      console.error('CID1 is not set');
      return;
    }
  
    const walletRate = {};
    nftInfo.forEach(type => {
      type.fields.forEach(field => {
        if (field.wallet) {
          walletRate[field.wallet] = (typeof walletRate[field.wallet] === 'undefined' ? 0 : parseFloat(walletRate[field.wallet])) + parseFloat(field.percentage);
        }
      });
    });
  
    const resultWallet = Object.keys(walletRate);
    const resultRate = Object.values(walletRate);

    try {
      await init();
      console.log(resultWallet);
      console.log(resultRate.map((x) => x * 10000));
      console.log(JSON.stringify(jwtDecode(token)));

      const deployedContract = await deployContract.settlement(
        resultWallet, // addresses
        resultRate.map((x) => x * 10000), // proportion
        cid1, // songCid
        '900000000', // price
      );
      
      // console.log(deployContract.options.address);
      // return deployedContract.options.address;
      console.log(deployContract);
      return deployedContract;
    } catch (error) {
      if (error.response) {
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
      } else if (error.request) {
        console.error('Error request:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
      console.error('Error config:', error.config);
    }
  };

  const handleUpload = async () => {
    const cid1 = await handlePostMeta();
    const settleAddr = await getSettleAddr();
  
    if (!cid1 || !settleAddr) {
      console.error('CID1 또는 settleAddr이 설정되지 않았습니다.');
      return;
    }
  
    const { name: artist, id: artistId } = jwtDecode(token);
    const { title, genre } = basicInfo;
    const file = musicFile;
  
    const walletRate = {};
    nftInfo.forEach(type => {
      type.fields.forEach(field => {
        if (field.wallet) {
          walletRate[field.wallet] = (typeof walletRate[field.wallet] === 'undefined' ? 0 : parseFloat(walletRate[field.wallet])) + parseFloat(field.percentage);
        }
      });
    });
  
    // artistId 및 composerId 포함
    const composerId = nftInfo.find(type => type.id === 1).fields.map(field => field.id);
    const songWriterId = nftInfo.find(type => type.id === 2).fields.map(field => field.id);
    
    const holder = [...composerId, ...songWriterId];
    const rate = holder.map(() => 1 / holder.length); // 각 홀더의 비율을 동일하게 설정
  
    const postData = { title, artist, genre, cid1, holder, rate, settleAddr };
    console.log('Post Data:', postData);
    
    try {
      const formData = new FormData();
      for (const key in postData) {
        if (key === 'holder' || key === 'rate') {
          formData.append(key, JSON.stringify(postData[key])); // JSON 문자열로 변환하여 추가
        } else if (Array.isArray(postData[key])) {
          postData[key].forEach((item, index) => {
            formData.append(`${key}[${index}]`, item);
          });
        } else {
          formData.append(key, postData[key]);
        }
      }
      formData.append('file', musicFile);
  
      await axios({
        method: 'post',
        url: `http://${process.env.REACT_APP_BACKEND_URL}/api/v1/upload`,
        headers: {
          authorization: token,
        },
        data: formData,
      });
      console.log('업로드 성공');
      alert('업로드 성공!');
      navigate('/');
    } catch (err) {
      console.error('업로드에 실패하였습니다. 다시 한번 확인해 주세요.');
      if (err.response) {
        console.error('Error response data:', err.response.data);
        console.error('Error response status:', err.response.status);
        console.error('Error response headers:', err.response.headers);
      } else if (err.request) {
        console.error('Error request:', err.request);
      } else {
        console.error('Error message:', err.message);
      }
      console.error(err.config);
    }
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
          {page === 1 && <AlbumUpload image={albumImageSrc} setImage={setAlbumImage} handleImage={handleImage} />}
          {page === 2 && <BasicInformation basicInfo={basicInfo} setBasicInfo={setBasicInfo} />}
          {page === 3 && <NFTInformation nftInfo={nftInfo} setNftInfo={setNftInfo} />}
          {page === 4 && <MusicFile musicFile={musicFile} setMusicFile={setMusicFile} />}
        </Box>
        <Box sx={{ marginTop: '50px', marginRight: '200px', marginLeft: 'auto', marginBottom: '30px' }}>
          {page > 1 && <Button onClick={ChangePreviousPage}>이전</Button>}
          {page < 4 && <Button onClick={ChangeNextPage}>다음</Button>}
          {page === 4 && <Button onClick={() => console.log(albumImage, basicInfo, nftInfo, musicFile)}>데이터 체크</Button>}
          {page === 4 && <Button onClick={handlePostMeta}>메타데이터 업로드</Button>}
          {page === 4 && <Button onClick={getSettleAddr}>settleAddr 확인</Button>}
          {page === 4 && <Button onClick={handleUpload}>업로드</Button>}
        </Box>
      </Box>
    </div>
  );
}
