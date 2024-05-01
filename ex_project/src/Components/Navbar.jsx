import React from 'react';
import { Grid, Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

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
      <Grid item xs={12} sm={6} md={4}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            sx={{ color: 'black', fontSize: { xs: '20px', sm: '24px' }, whiteSpace: 'nowrap', ml: '50px' }} // 여백 추가
            onClick={() => {
              Navigate('/');
            }}
          >
            UXM MUSIC
          </Button>
          <Button
            sx={{ color: 'black', ml: 2, whiteSpace: 'nowrap', ml: '50px' }} // 여백 추가
            onClick={() => {
              Navigate('/library');
            }}
          >
            둘러보기
          </Button>
          <TextField
            placeholder="검색"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <SearchIcon sx={{ color: 'gray', ml: 1 }} />
              ),
              sx: {
                ml: 2,
                backgroundColor: 'white',
                borderRadius: '20px',
                width: '400px',
                height: '30px',
              },
            }}
          />
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
