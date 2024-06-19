import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Grid, Typography, Divider } from '@mui/material';
import Musiclist from '../Components/Musiclist';

export default function SearchResultsPage() {
  const location = useLocation();
  const { results } = location.state || { results: [] };

  const musiclists = results.map((item, index) => (
    <React.Fragment key={item.id}>
      <Musiclist 
        image={item.image}
        title={item.title}
        artist={item.artist}
        album={item.genre}
        id={item.id}
      />
      {index !== results.length - 1 && <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />}
    </React.Fragment>
  ));

  return (
    <div>
      <Box sx={{ marginLeft: '200px', marginRight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white' }}>
        <h1>검색결과</h1>
        <Divider sx={{ marginBottom: '10px' }} />
        <Grid item xs={10} sm={6} md={4}>
          <Grid container spacing={2}>
            <Grid item xs={7} sx={{ whiteSpace: 'nowrap' }}>
              <p>곡/앨범</p>
            </Grid>
            <Grid item xs={3} sx={{ whiteSpace: 'nowrap' }}>
              <p>아티스트</p>
            </Grid>
            <Grid item xs={1} sx={{ whiteSpace: 'nowrap' }}>
              <p>음원구매</p>
            </Grid>
            <Grid item xs={1} sx={{ whiteSpace: 'nowrap' }}>
              <p>NFT구매</p>
            </Grid>
          </Grid>
          <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />
        </Grid>
      </Box>
      <Box sx={{ marginLeft: '200px', marginRight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white', marginBottom: '30px' }}>
        {musiclists}
        <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />
      </Box>
    </div>
  );
}
