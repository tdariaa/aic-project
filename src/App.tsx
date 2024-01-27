import React from 'react';
import { Route, Routes } from 'react-router';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <div className='App'>
            <header className='App-header'>
              <img src={logo} className='App-logo' alt='logo' />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                Learn React
              </a>
            </header>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
