import { useNavigate } from 'react-router';

interface AuthProps {
  email: string;
  password: string;
}

export const useAuthentication = () => {
  const navigate = useNavigate();
  const authCheck = (data: AuthProps) => {
    let isAuth;
    let pass;
    const user = localStorage.getItem(data.email);
    if (user) {
      pass = JSON.parse(user).password;
      isAuth = pass === data.password;
      isAuth ? navigate('/') : console.log('ooops');
      return;
    } else {
      navigate('/signup');
      return;
    }
  };
  return [authCheck];
};
