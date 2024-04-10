import React from 'react';
import {Box, Button, TextField} from '@mui/material';
import {useNavigate} from 'react-router-dom'

export default function SigninPage() {
  const Navigate = useNavigate();
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor : 'white' }}>
       <Box sx={{width : '600px', height : '500px',backgroundColor : 'white',display: 'flex', border : '1px solid gray',flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <TextField sx={{width : '300px', height:'40px',backgroundColor : 'white', marginBottom: '30px'}}
          label="아이디(이메일)"
        ></TextField>
        <TextField sx={{width : '300px', height:'40px',backgroundColor : 'white', marginBottom: '30px'}}
          label="비밀번호"
        ></TextField>
        <Box>
          <Button onClick={() => {Navigate('/signup')}}>회원가입</Button>
        </Box>
        <Button>로그인</Button>
       </Box>
      </Box>
        <h1>SignIn Page</h1>
    </div>
  );
}

