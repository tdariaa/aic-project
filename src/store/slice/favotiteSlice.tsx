import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PictureItemFront } from '../../utils/transformTypes';
import { getFavoriteItemsFromLS } from '../../utils/localStorageUtils';

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
    toggleFavoriteItem(state, action: PayloadAction<addFav>) {
      const isItemAlreadyAdded = state.favoriteQuery.some((item) => item.id === action.payload.item.id);
      isItemAlreadyAdded
        ? (state.favoriteQuery = state.favoriteQuery.filter((item) => item.id !== action.payload.item.id))
        : state.favoriteQuery.unshift(action.payload.item);
    },
    getFavoriteItem(state, action: PayloadAction<GetFavoriteProps>) {
      state.favoriteQuery = getFavoriteItemsFromLS(action.payload.email);
    },
    updateFavoriteItems(state, action: PayloadAction<updateFav>) {
      state.favoriteQuery = action.payload.item;
    },
  },
});

export const { toggleFavoriteItem, getFavoriteItem, updateFavoriteItems } = favoriteSlice.actions;
export default favoriteSlice.reducer;
