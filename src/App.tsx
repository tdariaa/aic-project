import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router';
import { Preloader } from './components/Preloader/Preloader';
import './App.css';

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
const Item = React.lazy(() => import('./components/Item/Item').then((module) => ({ default: module.Item })));
const SearchPage = React.lazy(() =>
  import('./pages/SearchPage/SearchPage').then((module) => ({ default: module.SearchPage })),
);
const Header = React.lazy(() => import('./components/Header/Header').then((module) => ({ default: module.Header })));
const NoResult = React.lazy(() =>
  import('./components/NoResult/NoResult').then((module) => ({ default: module.NoResult })),
);

function App() {
  return (
    <div className='page'>
      <Suspense fallback={<Preloader />}>
        <Header />
        <Routes>
          <Route path='*' element={<NoResult />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route
            path='/'
            element={
              <ErrorBoundary fallback={<h1>Error</h1>}>
                <MainPage />
              </ErrorBoundary>
            }
          />
          <Route
            path='/history'
            element={
              <ErrorBoundary fallback={<h1>Error</h1>}>
                <HistoryPage />
              </ErrorBoundary>
            }
          />
          <Route
            path='/favorite'
            element={
              <ErrorBoundary fallback={<h1>Error</h1>}>
                <FavoritePage />
              </ErrorBoundary>
            }
          />
          <Route
            path='/search'
            element={
              <ErrorBoundary fallback={<h1>Error</h1>}>
                <SearchPage />
              </ErrorBoundary>
            }
          />
          <Route
            path='/element/:id'
            element={
              <ErrorBoundary fallback={<h1>Error</h1>}>
                <Item />
              </ErrorBoundary>
            }
          />
          {/* <Route path='*' element={} /> */}

          {/* <Route path='/element' element={} /> */}

          {/* <Route path='/:id' element={ElementPage} id={id} /> */}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
