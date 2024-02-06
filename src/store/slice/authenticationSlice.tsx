import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
