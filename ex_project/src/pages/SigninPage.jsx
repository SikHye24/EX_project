import React, {useState} from 'react';
import {Box, Button, TextField} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import useAuth from '../Context/UseAuth';

export default function SigninPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [inputPw, setInputPw] = useState('');
  const [submit, setSubmit] = useState(false);
  const [inputEmail, setInputEmail] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const { login } = useAuth();

  const Navigate = useNavigate();

  const onClickLogin = () => {
    console.log('로그인');
    console.log('Email:', inputEmail);
    console.log('Pw:', inputPw);
    setSubmit(true);
    axios
      .post(`http://${process.env.REACT_APP_BACKEND_URL}/api/v1/auth/signin`, null, {
        params: {
          email: inputEmail,
          password: inputPw,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem('access_token', res.data);
          sessionStorage.setItem('email', inputEmail);
          const data = res.data;
          const token = data.data.access_token;
          console.log(`JWT Token: ${token}`);
          localStorage.setItem('jwtToken', token);
          Navigate('/');
        }
      })
      .catch((err) => {
        setSubmit(false);
        console.log(err.error);
        console.log(`http://${process.env.REACT_APP_BACKEND_URL}/api/v1/auth/signin`);
        alert('아이디와 비밀번호를 확인해주세요');
      });
  };

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'white' }}>
        <Box sx={{ width: '600px', height: '500px', backgroundColor: 'white', display: 'flex', border: '1px solid gray', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h1>로그인</h1>
          <TextField sx={{ width: '300px', height: '40px', backgroundColor: 'white', marginBottom: '30px' }}
            label="아이디(이메일)"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          ></TextField>
          <TextField sx={{ width: '300px', height: '40px', backgroundColor: 'white', marginBottom: '30px' }}
            label="비밀번호"
            type={passwordVisible ? 'text' : 'password'}
            value={inputPw}
            onChange={(e) => setInputPw(e.target.value)}
            InputProps={{
              endAdornment: (
                <IconButton onClick={togglePasswordVisibility}>
                  {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              ),
            }}
          ></TextField>
          <Box>
            <Button onClick={() => { Navigate('/signup') }}>회원가입</Button>
          </Box>
          <Button sx={{ width: '300px', height: '40px', color: 'black', backgroundColor: '#d0d0d0', marginTop: '10px' }}
            onClick={onClickLogin}
          >로그인</Button>
        </Box>
      </Box>
    </div>
  );
}
