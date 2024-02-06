import { useNavigate } from 'react-router';

interface AuthProps {
  email: string;
  password: string;
}

export const checkAuthentication = (data: AuthProps) => {
  let isAuth;
  let pass;
  const user = localStorage.getItem(data.email);
  if (user) {
    pass = JSON.parse(user).password;
    isAuth = pass === data.password;
    return isAuth;
  }
  return false;
};
