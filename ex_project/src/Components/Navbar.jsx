import React, { useState } from 'react';
import { Grid, Box, Button, TextField, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import useAuth from '../Context/UseAuth';

export default function Navbar() {
  const Navigate = useNavigate();

  const { authState, logout } = useAuth();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

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
      {authState.isLoggedIn ? (
        <Grid item xs={2} sm={6} md={8} sx={{ textAlign: 'right' }}>
        <Button
          sx={{ color: 'gray', mr: 1 }}
          onClick={() => {
            Navigate('/userlibrary');
          }}
        >
          보관함
        </Button>
        <Button
        sx={{ color: 'gray' }}
        onClick={handleOpenMenu}
      >
        마이페이지
      </Button>
        <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu}>사용자 정보</MenuItem>
        <MenuItem onClick={() => {
          Navigate('/upload')
        }}>업로드</MenuItem>
        <MenuItem
          onClick={() => {
            logout();
            handleCloseMenu();
          }}
        >
          로그아웃
        </MenuItem>
      </Menu>
      </Grid>
      ) : (
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
      )}
    </Grid>
  );
}
