import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const Navigate = useNavigate();
  return (
      <Box sx={{position : 'fixed', top : '0', width: '100%',height:'50px', backgroundColor: 'white', zIndex: 1000,
      display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 20px', overflow : 'hidden'
      }}>
        <Box sx={{marginRight : '500px', display : 'flex', alignItems : 'center'}}>
        <Button sx={{color : 'black', fontSize : '30px' }}
        onClick={()=> {
          Navigate('/');
        }}
        >
          Navbar
        </Button>
        <Button sx={{color : 'black'}}
        onClick={() => {
          Navigate('/library');
        }}>
          둘러보기
        </Button>
        <Button>검색창</Button>
        </Box>
        <Box sx={{marginLeft : '1px'}}>
        <Button sx={{color : 'gray'}}
        onClick={() => {
          Navigate('/signup');
        }}>
          회원가입
        </Button>
        <Button sx={{color : 'gray'}}
        onClick={() => {
          Navigate('/signin');
        }}>
          로그인
        </Button>
        </Box>
      </Box>
  );
}

