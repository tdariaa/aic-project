import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { HistoryState } from '../../types/types';
// import type { searchQuery } from '../../types/types';
// import { PictureItemFront } from '../../utils/transformTypes';

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
      console.log(action.payload);
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
      console.log(state.email);
    },
    logInUser(state, action: PayloadAction<string>) {
      console.log(action.payload);
      const userLS = localStorage.getItem(action.payload);
      if (userLS) {
        state.username = JSON.parse(userLS).username;
        state.email = JSON.parse(userLS).email;
        state.password = JSON.parse(userLS).password;
      }
    },
    logOut(state) {
      state.username = '';
      state.email = '';
      state.password = '';
    },
  },
});

export const { addUser, logInUser, logOut } = authenticationSlice.actions;
export default authenticationSlice.reducer;
