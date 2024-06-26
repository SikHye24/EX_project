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
import { ImageProvider } from './Context/ImageProvider';
import ProfilePage from './pages/ProfilePage';
import Error404 from './pages/ErrorPage/Error404';
import SearchResultsPage from './pages/SearchResultPage';

function App() {
  return (
    <>
    <AuthProvider>
    <ImageProvider>
    <BrowserRouter>
    <Box sx = {{paddingTop:'40px', display : 'flex', flexDirection : 'column', minHeight : '100vh'}}>
      <Navbar/>
      <Box sx = {{marginTop :'30px',flexGrow : 1}}>
        <Routes>
          <Route exact path = '/' element={<MainPage/>}/>
          <Route exact path = '/library' element={<LibraryPage/>}/>
          <Route exact path = '/signin' element={<SigninPage/>}/>
          <Route exact path = '/signup' element={<SignupPage/>}/>
          <Route exact path = '/songinfo/:id' element={<SonginfoPage/>}/>
          <Route exact path = '/musicpurchase/:id' element={<MusicpurchasePage/>}/>
          <Route exact path = '/nftpurchase/:id' element={<NFTpurchasePage/>}/>
          <Route exact path = '/userlibrary' element={<UserLibraryPage/>}/>
          <Route exact path = '/upload' element={<UploadPage/>}/>
          <Route exact path = '/profile' element={<ProfilePage/>}/>
          <Route exact path = '/searchresults' element={<SearchResultsPage/>}/>

          <Route exact path = '/404' element={<Error404/>}/>
        </Routes>
      </Box>
      {/* <Footer/> */}
    </Box>
    </BrowserRouter>
    </ImageProvider>
    </AuthProvider>
    </>
  );
}

export default App;
