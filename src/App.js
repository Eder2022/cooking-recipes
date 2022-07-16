
import{BrowserRouter} from 'react-router-dom';
import { Router } from './routes/Router';
import './App.css';
import theme from './constants/theme';
import {ThemeProvider} from '@mui/material'
import Header from './components/headers/Header';
import React from 'react';

function App() {
  const token = localStorage.getItem('token')
    const [rightButtonText, setrightButtonText ]= React.useState(token ? 'Sair' : 'Login')
  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header rightButtonText={rightButtonText} setrightButtonText={setrightButtonText}/>
      <Router  setrightButtonText={setrightButtonText}/>
      </BrowserRouter>
    </ThemeProvider>
    
    </>
  );
}

export default App;
