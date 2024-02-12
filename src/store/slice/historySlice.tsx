import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PictureItemFront } from '../../utils/transformTypes';
import { getParseItemsLS } from '../../utils/localStorageUtils';
import { RootState } from '../index';

export type searchQuery = string;

interface addHistory {
  search: string;
  email?: string;
}

export interface HistoryState {
  historyQuery: searchQuery[];
  email?: string;
}

const initialHistoryState: HistoryState = {
  historyQuery: [],
  email: '',
};

interface updateSearchQuery {
  historyQuery: searchQuery[];
  email: string;
}

export interface LSData {
  email: string;
  favorite: PictureItemFront[];
  history: string[];
  password: string;
  username: string;
}

export const historySlice = createSlice({
  name: 'history',
  initialState: initialHistoryState,
  reducers: {
    addHistoryItem(state, action: PayloadAction<addHistory>) {
      state.historyQuery.unshift(action.payload.search);
    },
    deleteHistoryItem(state, action: PayloadAction<addHistory>) {
      state.historyQuery = state.historyQuery.filter((item) => item !== action.payload.search);
    },
    updateHistoryItem(state, action: PayloadAction<updateSearchQuery>) {
      state.historyQuery = action.payload.historyQuery;
    },
    getHistoryItem(state, action: PayloadAction<string>) {
      let data = getParseItemsLS(action.payload);
      if (data) {
        state.historyQuery = data.history;
      }
    },
  },
});

export const getHistory = (state: RootState) => state.history.historyQuery;

export const { addHistoryItem, deleteHistoryItem, updateHistoryItem, getHistoryItem } = historySlice.actions;
export default historySlice.reducer;
