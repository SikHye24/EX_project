import React, {useState} from 'react';
import {Box, Button, Checkbox, TextField} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useNavigate} from 'react-router-dom'

export default function SignupPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const Navigate = useNavigate();

  return (
  <div>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor : 'white', marginBottom : '30px', marginTop : '30px' }}>
     <Box sx={{width : '600px', height : '800px',backgroundColor : 'white',display: 'flex', border : '1px solid gray',flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <h1>회원가입</h1>
      <Box sx={{width : '300px', height:'25px'}}>
        <p1>아이디</p1>
      </Box>
      <TextField sx={{width : '300px', height:'40px',backgroundColor : 'white', marginBottom: '30px'}}
        label="아이디 입력(이메일 주소)"
      ></TextField>
      <Box sx={{width : '300px', height:'25px'}}>
        <p1>비밀번호</p1>
      </Box>
      <TextField sx={{width : '300px', height:'40px',backgroundColor : 'white', marginBottom: '30px'}}
        label="문자, 숫자, 특수문자 포함 8~20자리"
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
      <Box sx={{width : '300px', height:'25px'}}>
        <p1>비밀번호 확인</p1>
      </Box>
      <TextField sx={{width : '300px', height:'40px',backgroundColor : 'white', marginBottom: '30px'}}
        label="비밀번호 재입력"
      ></TextField>
      <Box sx={{width : '300px', height:'25px'}}>
        <p1>생년월일</p1>
      </Box>
      <Box sx={{width : '300px', height:'40px', marginBottom : '30px' }}>
        <TextField sx={{width : '80px', height:'40px',backgroundColor : 'white', marginBottom: '30px', marginRight : '20px'}}
          label="년도"
        ></TextField>
        <TextField sx={{width : '80px', height:'40px',backgroundColor : 'white', marginBottom: '30px', marginRight : '20px'}}
          label="월"
        ></TextField>
        <TextField sx={{width : '80px', height:'40px',backgroundColor : 'white', marginBottom: '30px', marginRight : '20px'}}
          label="일"
        ></TextField>
      </Box>
      <Box sx={{width : '300px', height:'25px'}}>
        <p1>이름</p1>
      </Box>
      <TextField sx={{width : '300px', height:'40px',backgroundColor : 'white', marginBottom: '30px'}}
        label="이름을 입력해주세요"
      ></TextField>
      <Box sx={{width : '300px', height:'25px'}}>
        <p1>전화번호</p1>
      </Box>
      <TextField sx={{width : '300px', height:'40px',backgroundColor : 'white', marginBottom: '30px'}}
        label="휴대전화 번호 입력('-'제외)"
      ></TextField>
      <Box sx={{width : '300px', height:'40px', marginBottom : '30px' }}>
        <Checkbox label="약관 동의"></Checkbox>
        <p1>약관 동의</p1>
      </Box>
      <Button sx={{width : '300px', height : '40px', color : 'black', backgroundColor : '#d0d0d0'}}
        onClick={() => {Navigate('/')}}
      >
        회원가입
      </Button>
     </Box>
    </Box>
  </div>
  );
}

