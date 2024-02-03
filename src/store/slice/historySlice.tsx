import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { HistoryState } from '../../types/types';
// import type { searchQuery } from '../../types/types';

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

export const historySlice = createSlice({
  name: 'history',
  initialState: initialHistoryState,
  reducers: {
    addHistoryItem(state, action: PayloadAction<addHistory>) {
      console.log(action.payload);
      state.historyQuery.unshift(action.payload.search);
    },
    deleteHistoryItem(state, action: PayloadAction<searchQuery>) {
      state.historyQuery = state.historyQuery.filter((item) => item !== action.payload);
    },
    updateHistoryItem(state, action: PayloadAction<updateSearchQuery>) {
      console.log(action.payload);
      state.historyQuery = action.payload.historyQuery;
    },
    getHistoryItem(state, action: PayloadAction<string>) {
      let LS = localStorage.getItem(action.payload);
      if (LS) {
        state.historyQuery = JSON.parse(LS).history;
      }
    },
  },
});

export const { addHistoryItem, deleteHistoryItem, updateHistoryItem, getHistoryItem } = historySlice.actions;
export default historySlice.reducer;
