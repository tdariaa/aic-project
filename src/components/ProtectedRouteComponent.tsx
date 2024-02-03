import React from 'react';
import { Navigate, Outlet, Route, RouteProps } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavorites';

type ProtectRouteComponentProps = RouteProps & {
  isAuth: boolean;
};

export const ProtectedRouteComponent = () => {
  useFavorites('hjhj');
  const isAuth = true;
  console.log('fromProtectEl');
  return isAuth ? <Outlet /> : <Navigate to='/signin' replace />;
  // return isAuth ? <Route {...RouteProps} /> : <Navigate to='/signin' replace />;
  // <Component />
  // : <Navigate to="/signin" replace />
};
