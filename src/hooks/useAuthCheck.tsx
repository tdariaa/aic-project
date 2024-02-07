import React from 'react';
import { useAppDispatch } from '../store/hook';
import { logInUser } from '../store/slice/authenticationSlice';
import { getAuthLS } from '../utils/localStorageUtils';

export const useAuthCheck = () => {
  const dispatch = useAppDispatch();
  const emailLS = getAuthLS();

  React.useEffect(() => {
    if (emailLS) {
      dispatch(logInUser(emailLS));
    }
  }, []);
};
