import React, {useState} from 'react';
import {Box, Button, TextField} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useNavigate} from 'react-router-dom'

export default function SigninPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const Navigate = useNavigate();
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor : 'white' }}>
       <Box sx={{width : '600px', height : '500px',backgroundColor : 'white',display: 'flex', border : '1px solid gray',flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <h1>로그인</h1>
        <TextField sx={{width : '300px', height:'40px',backgroundColor : 'white', marginBottom: '30px'}}
          label="아이디(이메일)"
        ></TextField>
        <TextField sx={{width : '300px', height:'40px',backgroundColor : 'white', marginBottom: '30px'}}
          label="비밀번호"
          type={passwordVisible ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton onClick={togglePasswordVisibility}>
                {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            ),
          }}
        >
        </TextField>
        <Box>
          <Button onClick={() => {Navigate('/signup')}}>회원가입</Button>
        </Box>
        <Button sx={{width : '300px', height : '40px', color : 'black', backgroundColor : '#d0d0d0'}}>로그인</Button>
       </Box>
      </Box>
    </div>
  );
}

