import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from './Components/Navbar';
import MainPage from './pages/MainPage';
import LibraryPage from './pages/LibraryPage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
    <Box sx = {{paddingTop:'40px', display : 'flex', flexDirection : 'column', minHeight : '100vh'}}>
      <Navbar/>
      <Box sx = {{flexGrow : 1}}>
        <Routes>
          <Route exact path = '/' element={<MainPage/>}/>
          <Route exact path = '/library' element={<LibraryPage/>}/>
          <Route exact path = '/signin' element={<SigninPage/>}/>
          <Route exact path = '/signup' element={<SignupPage/>}/>
        </Routes>
      </Box>
      <Footer/>
    </Box>
    </BrowserRouter>
    </>
  );
}

export default App;
