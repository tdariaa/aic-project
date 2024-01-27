import React from 'react';
import { Route, Routes } from 'react-router';
import { MainPage } from './pages/MainPage/MainPage';
import { SignInPage } from './pages/SignInPage/SignInPage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='page'>
      <Routes>
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/' element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
