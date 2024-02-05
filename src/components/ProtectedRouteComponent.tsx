import React from 'react';
import { Navigate, Outlet, Route, RouteProps } from 'react-router-dom';

export const ProtectedRouteComponent = () => {
  const isAuth = localStorage.getItem('online');
  return isAuth ? <Outlet /> : <Navigate to='/signin' replace />;
};
