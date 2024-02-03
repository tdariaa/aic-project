import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { HistoryState } from '../../types/types';
// import type { searchQuery } from '../../types/types';
import { PictureItemFront } from '../../utils/transformTypes';

export interface FavoriteState {
  favoriteQuery: PictureItemFront[];
}

const initialHistoryState: FavoriteState = {
  favoriteQuery: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: initialHistoryState,
  reducers: {
    addFavoriteItem(state, action: PayloadAction<PictureItemFront>) {
      state.favoriteQuery.unshift(action.payload);
    },
    // getFavoriteItem(state, action: PayloadAction<PictureItemFront>) {
    //     localStorage.getItem(action.payload.email)
    //   },
    // deleteFavoriteItem(state, action: PayloadAction<searchQuery>) {
    //   state.historyQuery = state.historyQuery.filter((item) => item !== action.payload);
    // },
  },
});

export const { addFavoriteItem } = favoriteSlice.actions;
export default favoriteSlice.reducer;
