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
    // getUser(state, action: PayloadAction<AuthState>) {
    //     state.username = action.payload.username;
    //     state.email = action.payload.email;
    //     state.password = action.payload.password;
    //     console.log(state.email);
    //   },
    // deleteFavoriteItem(state, action: PayloadAction<searchQuery>) {
    //   state.historyQuery = state.historyQuery.filter((item) => item !== action.payload);
    // },
  },
});

export const { addUser } = authenticationSlice.actions;
export default authenticationSlice.reducer;
