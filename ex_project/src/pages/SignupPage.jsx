import React, { useState } from 'react';
import { Box, Button, Checkbox, TextField, IconButton, MenuItem, Select, FormControl, InputLabel, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignupPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [wallet, setWallet] = useState('');
  const [userType, setUserType] = useState('');
  const [checked, setChecked] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordState, setPasswordState] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [nicknameError, setNicknameError] = useState('');
  const [walletError, setWalletError] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const joinData = {
      email,
      nickname,
      name,
      password,
      rePassword,
      wallet,
      type: userType,
    };

    // 이메일 유효성 체크
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!emailRegex.test(email)) setEmailError('올바른 이메일 형식이 아닙니다.');
    else setEmailError('');

    // 비밀번호 유효성 체크
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegex.test(password)) setPasswordState('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
    else setPasswordState('');

    // 비밀번호 같은지 체크
    if (password !== rePassword) setPasswordError('비밀번호가 일치하지 않습니다.');
    else setPasswordError('');

    // 이름 유효성 검사
    const nameRegex = /^[가-힣a-zA-Z]+$/;
    if (!nameRegex.test(name) || name.length < 1) setNameError('올바른 이름을 입력해주세요.');
    else setNameError('');

    // 닉네임 유효성 검사
    const nicknameRegex = /^[가-힣a-zA-Z]+$/;
    if (!nicknameRegex.test(nickname) || nickname.length < 1) {
      setNicknameError('올바른 닉네임을 입력해주세요');
    } else {
      setNicknameError('');
    }

    // 지갑주소 유효성 검사
    const walletRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{42}$/;
    if (!walletRegex.test(wallet) || wallet.length < 1) {
      setWalletError('올바른 지갑주소를 입력해주세요');
    } else {
      axios({
        method: 'post',
        url: `http://${process.env.REACT_APP_BACKEND_URL}/api/v1/auth/check`,
        data: {
          wallet: wallet,
        },
      })
        .then((res) => {
          if (res.data !== null) {
            setWalletError('');
          } else {
            setWalletError('이미 존재하는 지갑주소입니다.');
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }

    // 회원가입 동의 체크
    if (!checked) alert('올바른 양식과 함께 회원가입 약관에 동의해주세요.');

    if (
      emailRegex.test(email) &&
      passwordRegex.test(password) &&
      password === rePassword &&
      nameRegex.test(name) &&
      walletRegex.test(wallet) &&
      checked
    ) {
      onhandlePost(joinData);
    }
  };

  const onhandlePost = async (data) => {
    const { email, name, nickname, password, wallet, type } = data;
    const postData = { email, name, nickname, password, wallet, type };
    setSubmit(true);
    // post
    await axios
      .post(`http://${process.env.REACT_APP_BACKEND_URL}/api/v1/auth/signup`, postData)
      .then(function (response) {
        console.log(response, '성공');
        navigate('/signin');
      })
      .catch(function (err) {
        console.log(err);
        setSubmit(false);
        setRegisterError('회원가입에 실패하였습니다. 다시한번 확인해 주세요.');
      });
  };

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'white', marginBottom: '100px', marginTop: '100px' }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ width: '600px', height: '950px', backgroundColor: 'white', display: 'flex', border: '1px solid gray', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        >
          <h1>회원가입</h1>
          <Box sx={{ width: '300px', height: '25px' }}>
            <Typography>아이디</Typography>
          </Box>
          <TextField
            sx={{ width: '300px', height: '40px', backgroundColor: 'white', marginBottom: '30px' }}
            label="아이디 입력(이메일 주소)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            error={!!emailError}
            helperText={emailError}
          />
          <Box sx={{ width: '300px', height: '25px' }}>
            <Typography>비밀번호</Typography>
          </Box>
          <TextField
            sx={{ width: '300px', height: '40px', backgroundColor: 'white', marginBottom: '30px' }}
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
            name="password"
            error={!!passwordState || !!passwordError}
            helperText={passwordState || passwordError}
          />
          <Box sx={{ width: '300px', height: '25px' }}>
            <Typography>비밀번호 확인</Typography>
          </Box>
          <TextField
            sx={{ width: '300px', height: '40px', backgroundColor: 'white', marginBottom: '30px' }}
            label="비밀번호 재입력"
            type={passwordVisible ? 'text' : 'password'}
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            name="rePassword"
            error={!!passwordError}
            helperText={passwordError}
          />
          <Box sx={{ width: '300px', height: '25px' }}>
            <Typography>이름</Typography>
          </Box>
          <Box sx={{ width: '300px', height: '40px', marginBottom: '30px' }}>
            <TextField
              sx={{ width: '300px', height: '40px', backgroundColor: 'white', marginBottom: '30px', marginRight: '20px' }}
              label="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              error={!!nameError}
              helperText={nameError}
            />
          </Box>
          <Box sx={{ width: '300px', height: '25px' }}>
            <Typography>회원 유형</Typography>
          </Box>
          <FormControl sx={{ width: '300px', marginBottom: '30px' }}>
            <InputLabel id="user-type-label">회원 유형</InputLabel>
            <Select
              labelId="user-type-label"
              id="user-type-select"
              value={userType}
              label="회원 유형"
              onChange={handleUserTypeChange}
              name="type"
            >
              <MenuItem value="General">General</MenuItem>
              <MenuItem value="Producer">Producer</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ width: '300px', height: '25px' }}>
            <Typography>닉네임</Typography>
          </Box>
          <TextField
            sx={{ width: '300px', height: '40px', backgroundColor: 'white', marginBottom: '30px' }}
            label="닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            name="nickname"
            error={!!nicknameError}
            helperText={nicknameError}
          />
          <Box sx={{ width: '300px', height: '25px' }}>
            <Typography>지갑주소</Typography>
          </Box>
          <TextField
            sx={{ width: '300px', height: '40px', backgroundColor: 'white', marginBottom: '30px' }}
            label="지갑주소"
            value={wallet}
            onChange={(e) => setWallet(e.target.value)}
            name="wallet"
            error={!!walletError}
            helperText={walletError}
          />
          <Box sx={{ width: '300px', height: '40px', marginBottom: '30px', display: 'flex', alignItems: 'center' }}>
            <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />
            <Typography>약관 동의</Typography>
          </Box>
          <Button
            sx={{ width: '300px', height: '40px', color: 'black', backgroundColor: '#d0d0d0' }}
            type="submit"
          >
            회원가입
          </Button>
          {registerError && <Typography color="error">{registerError}</Typography>}
        </Box>
      </Box>
    </div>
  );
}
