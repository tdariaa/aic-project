import { SignIn } from '../../components/SignIn/SignIn';
import { Authentication } from '../../components/Authentication/Authentication';

export const SignInPage = () => {
  return <Authentication pathname={'/signin'} />;
};
