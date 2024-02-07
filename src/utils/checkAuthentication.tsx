import { getParseItemsLS } from './localStorageUtils';
import { PictureItemFront } from './transformTypes';

interface AuthProps {
  email: string;
  password: string;
}

export interface LSData {
  email: string;
  favorite: PictureItemFront[];
  history: string[];
  password: string;
  username: string;
}

export const checkAuthentication = (data: AuthProps) => {
  let isAuth: boolean;
  let pass: string;
  const user = getParseItemsLS(data.email);
  if (user) {
    pass = user.password;
    isAuth = pass === data.password;
    return isAuth;
  }
  return false;
};
