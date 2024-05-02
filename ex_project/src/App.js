import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from './Components/Navbar';
import MainPage from './pages/MainPage';
import LibraryPage from './pages/LibraryPage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
// import Footer from './Components/Footer';
import SonginfoPage from './pages/SonginfoPage';
import MusicpurchasePage from './pages/MusicpurchasePage';
import NFTpurchasePage from './pages/NFTpurchasePage';
import AuthProvider from './Context/AuthProvider';
import UserLibraryPage from './pages/UserLibraryPage';
import UploadPage from './pages/UploadPage';

function App() {
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
    <Box sx = {{paddingTop:'40px', display : 'flex', flexDirection : 'column', minHeight : '100vh'}}>
      <Navbar/>
      <Box sx = {{marginTop :'30px',flexGrow : 1}}>
        <Routes>
          <Route exact path = '/' element={<MainPage/>}/>
          <Route exact path = '/library' element={<LibraryPage/>}/>
          <Route exact path = '/signin' element={<SigninPage/>}/>
          <Route exact path = '/signup' element={<SignupPage/>}/>
          <Route exact path = '/songinfo' element={<SonginfoPage/>}/>
          <Route exact path = '/musicpurchase' element={<MusicpurchasePage/>}/>
          <Route exact path = '/nftpurchase' element={<NFTpurchasePage/>}/>
          <Route exact path = '/userlibrary' element={<UserLibraryPage/>}/>
          <Route exact path = '/upload' element={<UploadPage/>}/>
        </Routes>
      </Box>
      {/* <Footer/> */}
    </Box>
    </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;
