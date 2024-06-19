import React, { useState } from 'react';
import { Grid, Box, Button, TextField, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import useAuth from '../Context/UseAuth';

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('jwtToken');

  const { authState, logout } = useAuth();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('jwtToken'); // 로그아웃 시 localStorage에서 토큰 삭제
    handleCloseMenu();
    navigate('/'); // 로그아웃 후 메인 페이지로 이동
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
      <Grid item xs={12} sm={4} md={3}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            sx={{ color: 'black', fontSize: { xs: '20px', sm: '24px' }, whiteSpace: 'nowrap' }}
            onClick={() => {
              navigate('/');
            }}
          >
            UXM MUSIC
          </Button>
          <Button
            sx={{ color: 'black', ml: 2, whiteSpace: 'nowrap' }}
            onClick={() => {
              navigate('/library');
            }}
          >
            둘러보기
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} md={6}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <TextField
            placeholder="검색"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <SearchIcon sx={{ color: 'gray', ml: 1 }} />
              ),
              sx: {
                backgroundColor: 'white',
                borderRadius: '20px',
                width: '100%',
                maxWidth: '400px',
                height: '40px',
              },
            }}
          />
        </Box>
      </Grid>
      {/* 토큰 사용하게 변경 */}
      {token ? (
        <Grid item xs={12} sm={4} md={3} sx={{ textAlign: 'right' }}>
          <Button
            sx={{ color: 'gray', mr: 1 }}
            onClick={() => {
              navigate('/userlibrary');
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
            <MenuItem onClick={() => {
              navigate('/profile');
              handleCloseMenu();
            }}>사용자 정보</MenuItem>
            <MenuItem onClick={() => {
              navigate('/upload');
              handleCloseMenu();
            }}>업로드</MenuItem>
            <MenuItem
              onClick={handleLogout}
            >
              로그아웃
            </MenuItem>
          </Menu>
        </Grid>
      ) : (
        <Grid item xs={12} sm={4} md={3} sx={{ textAlign: 'right' }}>
          <Button
            sx={{ color: 'gray', mr: 1 }}
            onClick={() => {
              navigate('/signup');
            }}
          >
            회원가입
          </Button>
          <Button
            sx={{ color: 'gray' }}
            onClick={() => {
              navigate('/signin');
            }}
          >
            로그인
          </Button>
        </Grid>
      )}
    </Grid>
  );
}
