import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRouteComponent = () => {
  const isAuth = localStorage.getItem('online');
  return isAuth ? <Outlet /> : <Navigate to='/signin' replace />;
};
