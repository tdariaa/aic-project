import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { HistoryState } from '../../types/types';
// import type { searchQuery } from '../../types/types';
import { PictureItemFront } from '../../utils/transformTypes';

export interface FavoriteState {
  favoriteQuery: PictureItemFront[];
  email?: string;
}

const initialFavoriteState: FavoriteState = {
  favoriteQuery: [],
  email: '',
};

interface GetFavoriteProps {
  email: string;
}

interface addFav {
  item: PictureItemFront;
  email: string;
}

interface updateFav {
  item: PictureItemFront[];
  email: string;
}

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: initialFavoriteState,
  reducers: {
    addFavoriteItem(state, action: PayloadAction<addFav>) {
      const isItemAlreadyAdded = state.favoriteQuery.some((item) => item.id === action.payload.item.id);
      isItemAlreadyAdded
        ? (state.favoriteQuery = state.favoriteQuery.filter((item) => item.id !== action.payload.item.id))
        : state.favoriteQuery.unshift(action.payload.item);
    },
    getFavoriteItem(state, action: PayloadAction<GetFavoriteProps>) {
      let LS = localStorage.getItem(action.payload.email);
      if (LS) {
        state.favoriteQuery = JSON.parse(LS);
      }
    },
    updateFavoriteItems(state, action: PayloadAction<updateFav>) {
      state.favoriteQuery = action.payload.item;
    },
  },
});

export const { addFavoriteItem, getFavoriteItem, updateFavoriteItems } = favoriteSlice.actions;
export default favoriteSlice.reducer;
