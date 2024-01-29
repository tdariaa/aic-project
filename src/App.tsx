import React, { lazy, Suspense } from 'react';

// const OtherComponent = React.lazy(() => import('./OtherComponent'));
import { Route, Routes } from 'react-router';
// import { MainPage } from './pages/MainPage/MainPage';
// import { SignInPage } from './pages/SignInPage/SignInPage';
// import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import './App.css';

import { Preloader } from './components/Preloader/Preloader';
const MainPage = React.lazy(() => import('./pages/MainPage/MainPage').then((module) => ({ default: module.MainPage })));
const HistoryPage = React.lazy(() =>
  import('./pages/HistoryPage/HistoryPage').then((module) => ({ default: module.HistoryPage })),
);
const FavoritePage = React.lazy(() =>
  import('./pages/FavoritePage/FavoritePage').then((module) => ({ default: module.FavoritePage })),
);
const SignInPage = React.lazy(() =>
  import('./pages/SignInPage/SignInPage').then((module) => ({ default: module.SignInPage })),
);
const SignUpPage = React.lazy(() =>
  import('./pages/SignUpPage/SignUpPage').then((module) => ({ default: module.SignUpPage })),
);

function App() {
  return (
    <div className='page'>
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/' element={<MainPage />} />
          <Route path='/history' element={<HistoryPage />} />
          <Route path='/favorite' element={<FavoritePage />} />
          {/* <Route path='*' element={} /> */}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
