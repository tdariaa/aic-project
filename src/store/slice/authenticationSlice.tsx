import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getParseItemsLS } from '../../utils/localStorageUtils';
import { RootState } from '../index';

export interface AuthState {
  username?: string;
  email?: string;
  password?: string;
}

const initialAuthState: AuthState = {
  username: '',
  email: '',
  password: '',
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    addUser(state, action: PayloadAction<AuthState>) {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logInUser(state, action: PayloadAction<string>) {
      const user = getParseItemsLS(action.payload);
      if (user) {
        state.username = user.username;
        state.email = user.email;
        state.password = user.password;
      }
    },
    logOut(state) {
      state.username = '';
      state.email = '';
      state.password = '';
    },
  },
});

export const getEmail = (state: RootState) => state.authentication.email;

export const { addUser, logInUser, logOut } = authenticationSlice.actions;
export default authenticationSlice.reducer;
