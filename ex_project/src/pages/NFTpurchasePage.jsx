import React, { useState, useEffect } from 'react';
import { Box, Button, Card, CardMedia, Divider, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';

export default function NFTpurchasePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [NFT, setNFT] = useState('');
  const [blockchain, setBlockchain] = useState('');
  const [price, setPrice] = useState('0.005 ETH');
  const [nftList, setNftList] = useState([]);
  const token = localStorage.getItem('jwtToken');

  const getRes = async () => {
    setLoading(true);
    await axios
      .get(`http://${process.env.REACT_APP_BACKEND_URL}/api/v1/music/${id}`)
      .then(async (res) => {
        setData(res.data.data);
        setPrice(res.data.data.price);
        const nftArray = await handleNFTSet(res.data.data);
        setNftList(nftArray);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        navigate('/403');
      });
  };

  const handleNFTSet = async (result) => {
    console.log(result);
    const musicid = result.id;

    let buyablenftarray = [];
    await axios
      .get(`http://${process.env.REACT_APP_BACKEND_URL}/api/v1/nft/${result.id}`)
      .then((res) => {
        console.log(res.data.data.dataValues.tx_id);
        if (res.data.data && res.data.data.dataValues) {
          buyablenftarray.push(res.data.data.dataValues.tx_id);
        }
      })
      .catch((err) => {
        console.log(err);
        navigate('/403');
      });
    return buyablenftarray;
  };

  useEffect(() => {
    getRes();
  }, [id, token, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const isBase64 = (str) => {
    try {
      return btoa(atob(str)) === str;
    } catch (err) {
      return false;
    }
  };

  const imageUrl = isBase64(data.image) ? `data:image/jpeg;base64,${data.image}` : data.image;

  const handleNFTChange = (event) => {
    setNFT(event.target.value);
  };

  const handleblockchainChange = (event) => {
    setBlockchain(event.target.value);
  };

  return (
    <div>
      <Box sx={{ marginTop: '50px', marginLeft: '200px', marginRight: '200px', display: 'flex', flexDirection: 'row' }}>
        <Card sx={{ width: '200px', height: '200px' }}>
          <CardMedia 
            component="img"
            image={imageUrl}
            alt="Music"
            sx={{ width: '100%', height: '100%' }}
          />
        </Card>
        <Box sx={{ marginLeft: '30px', display: 'flex', flexDirection: 'column' }}>
          <h1>{data.title}</h1>
          <Button sx={{ color: 'black' }}>{data.artist}</Button>
          <Button sx={{ color: 'gray' }}>{data.album}</Button>
          <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
            <ContentPasteIcon
              sx={{ marginRight: '10px' }}
              onClick={() => {
                navigate(`/songinfo/${id}`)
              }}
            />
            <MusicNoteIcon 
              sx={{ marginRight: '10px' }}
              onClick={() => {
                navigate(`/musicpurchase/${id}`)
              }}
            />
            <AudioFileIcon 
              onClick={() => {
                navigate(`/nftpurchase/${id}`)
              }}
            />
          </Box>
        </Box>
      </Box>
      <Divider sx={{ marginTop: '50px', marginLeft: '200px', marginRight: '200px' }} />
      <Box sx={{ marginTop: '30px', marginLeft: '500px', marginRight: '500px', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ marginBottom: '10px' }}>
          <h1>NFT 구매</h1>
        </Box>
        <FormControl fullWidth>
          <InputLabel id="NFT-select-label">NFT를 선택하세요</InputLabel>
          <Select
            labelId="NFT-select-label"
            id="NFT-select"
            value={NFT}
            label="NFT"
            onChange={handleNFTChange}
            sx={{ width: '100%' }}
          >
            {nftList.map((tx_id, index) => (
              <MenuItem key={index} value={tx_id}>
                {tx_id}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField sx={{ marginTop: '20px' }}
          value={price}
          disabled
        />
        <Box sx={{ marginTop: '10px' }}>
          <p style={{ color: 'gray' }}>*트랜잭션 비용은 별도입니다</p>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
          <TextField sx={{ width: '60%' }} 
            label="구매가 입력"
          />
          <FormControl sx={{ width: '20%', marginLeft: '10px' }}>
            <InputLabel id="blockchain-select-label"></InputLabel>
            <Select
              labelId="blockchain-select-label"
              id="blockchain-select"
              value={blockchain}
              onChange={handleblockchainChange}
              fullWidth
            >
              <MenuItem value={1}>ETH</MenuItem>
              <MenuItem value={2}>WEI</MenuItem>
            </Select>
          </FormControl>
          <Button sx={{ width: '20%', marginLeft: '10px', color: 'white', backgroundColor: '#0064FF', fontSize: '17px' }}>NFT 구매</Button>
        </Box>
      </Box>
    </div>
  );
}
