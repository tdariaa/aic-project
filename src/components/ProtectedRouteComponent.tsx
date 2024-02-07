import { Navigate, Outlet } from 'react-router-dom';
import { getAuthLS } from '../utils/localStorageUtils';

export const ProtectedRouteComponent = () => {
  const isAuth = getAuthLS();
  return isAuth ? <Outlet /> : <Navigate to='/signin' replace />;
};
