import React from 'react';
import { useAppDispatch } from '../store/hook';
import { logInUser } from '../store/slice/authenticationSlice';

export const useAuthCheck = () => {
  const dispatch = useAppDispatch();
  const LSemail = localStorage.getItem('online');

  React.useEffect(() => {
    if (LSemail) {
      dispatch(logInUser(LSemail));
    }
  }, []);
};
