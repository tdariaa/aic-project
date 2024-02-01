import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

type searchQuery = string;

interface IHistoryState {
  historyQuery: searchQuery[];
}

const initialHistoryState: IHistoryState = {
  historyQuery: [],
};

export const historySlice = createSlice({
  name: 'history',
  initialState: initialHistoryState,
  reducers: {
    addHistoryItem(state, action: PayloadAction<searchQuery>) {
      state.historyQuery.unshift(action.payload);
    },
    deleteHistoryItem(state, action: PayloadAction<searchQuery>) {
      state.historyQuery = state.historyQuery.filter((item) => item !== action.payload);
    },
  },
});

export const { addHistoryItem, deleteHistoryItem } = historySlice.actions;
export default historySlice.reducer;
