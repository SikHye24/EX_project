import React from 'react';
import { Grid, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const Navigate = useNavigate();

  return (
    <Grid
      container
      component="nav"
      justifyContent="center"
      alignItems="center"
      sx={{
        position: 'fixed',
        top: 0,
        width: '100%',
        height: '70px',
        backgroundColor: 'white',
        zIndex: 1000,
        padding: '0 20px',
      }}
    >
      <Grid item xs={10} sm={6} md={4}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            sx={{ color: 'black', fontSize: { xs: '20px', sm: '24px' } }}
            onClick={() => {
              Navigate('/');
            }}
          >
            Navbar
          </Button>
          <Button
            sx={{ color: 'black', ml: 2 }}
            onClick={() => {
              Navigate('/library');
            }}
          >
            둘러보기
          </Button>
        </Box>
      </Grid>
      <Grid item xs={2} sm={6} md={8} sx={{ textAlign: 'right' }}>
        <Button
          sx={{ color: 'gray', mr: 1 }}
          onClick={() => {
            Navigate('/signup');
          }}
        >
          회원가입
        </Button>
        <Button
          sx={{ color: 'gray' }}
          onClick={() => {
            Navigate('/signin');
          }}
        >
          로그인
        </Button>
      </Grid>
    </Grid>
  );
}