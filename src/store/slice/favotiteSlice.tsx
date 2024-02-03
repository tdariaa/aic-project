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

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: initialFavoriteState,
  reducers: {
    addFavoriteItem(state, action: PayloadAction<addFav>) {
      console.log(action.payload.item, action.payload.email);
      const isItemAlreadyAdded = state.favoriteQuery.some((item) => item.id === action.payload.item.id);
      //   const itemsLS = localStorage.getItem(action.payload.email);

      //   if (!isItemAlreadyAdded && itemsLS) {
      if (!isItemAlreadyAdded) {
        state.favoriteQuery.unshift(action.payload.item);

        // const parseItemsLS = JSON.parse(itemsLS);
        // console.log('1', parseItemsLS);
        // parseItemsLS.favorite.unshift(action.payload.item);
        // localStorage.setItem(action.payload.email, JSON.stringify(parseItemsLS));
        // console.log('2', parseItemsLS);
      }
    },
    getFavoriteItem(state, action: PayloadAction<GetFavoriteProps>) {
      let LS = localStorage.getItem(action.payload.email);
      if (LS) {
        state.favoriteQuery = JSON.parse(LS);
      }
    },
    // deleteFavoriteItem(state, action: PayloadAction<searchQuery>) {
    //   state.historyQuery = state.historyQuery.filter((item) => item !== action.payload);
    // },
  },
});

export const { addFavoriteItem, getFavoriteItem } = favoriteSlice.actions;
export default favoriteSlice.reducer;
