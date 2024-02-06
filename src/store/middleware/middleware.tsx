import { createListenerMiddleware } from '@reduxjs/toolkit';
import { addFavoriteItem, updateFavoriteItems } from '../slice/favotiteSlice';
import { addHistoryItem, deleteHistoryItem, updateHistoryItem } from '../slice/historySlice';
import { addUser, logInUser, logOut } from '../slice/authenticationSlice';
import { PictureItemFront } from '../../utils/transformTypes';

export const LSMiddleware = createListenerMiddleware();
LSMiddleware.startListening({
  actionCreator: addUser,
  effect: (action, listenerApi) => {
    if (action.payload.email) {
      localStorage.setItem(
        action.payload.email,
        JSON.stringify({
          username: action.payload.username,
          email: action.payload.email,
          password: action.payload.password,
          favorite: [],
          history: [],
        }),
      );
      // localStorage.setItem('online', action.payload.email);

      const itemsLS = localStorage.getItem(action.payload.email);
      let parseItemsLS: LSData;
      if (itemsLS) {
        parseItemsLS = JSON.parse(itemsLS);
        listenerApi.dispatch(updateFavoriteItems({ item: parseItemsLS.favorite, email: parseItemsLS.email }));
        listenerApi.dispatch(updateHistoryItem({ historyQuery: parseItemsLS.history, email: parseItemsLS.email }));
        localStorage.setItem('online', parseItemsLS.email);
      }
    }
  },
});

export interface LSData {
  email: string;
  favorite: PictureItemFront[];
  history: string[];
  password: string;
  username: string;
}

LSMiddleware.startListening({
  actionCreator: logInUser,
  effect: (action, listenerApi) => {
    const itemsLS = localStorage.getItem(action.payload);
    let parseItemsLS: LSData;
    if (itemsLS) {
      parseItemsLS = JSON.parse(itemsLS);
      listenerApi.dispatch(updateFavoriteItems({ item: parseItemsLS.favorite, email: parseItemsLS.email }));
      listenerApi.dispatch(updateHistoryItem({ historyQuery: parseItemsLS.history, email: parseItemsLS.email }));
      localStorage.setItem('online', parseItemsLS.email);
    }
  },
});

LSMiddleware.startListening({
  actionCreator: logOut,
  effect: () => {
    localStorage.removeItem('online');
  },
});

LSMiddleware.startListening({
  actionCreator: addFavoriteItem,
  effect: (action) => {
    const itemsLS = localStorage.getItem(action.payload.email);
    let parseItemsLS: LSData;
    if (itemsLS) {
      parseItemsLS = JSON.parse(itemsLS);
      const isItemAlreadyAdded = parseItemsLS.favorite.some(
        (item: PictureItemFront) => item.id === action.payload.item.id,
      );
      isItemAlreadyAdded
        ? (parseItemsLS.favorite = parseItemsLS.favorite.filter(
            (item: PictureItemFront) => item.id !== action.payload.item.id,
          ))
        : parseItemsLS.favorite.unshift(action.payload.item);
      localStorage.setItem(action.payload.email, JSON.stringify(parseItemsLS));
    }
  },
});

LSMiddleware.startListening({
  actionCreator: addHistoryItem,
  effect: (action) => {
    let itemsLS: string | null;
    let parseItemsLS: LSData;
    if (action.payload.email) {
      itemsLS = localStorage.getItem(action.payload.email);
      if (itemsLS) {
        parseItemsLS = JSON.parse(itemsLS);
        parseItemsLS.history.unshift(action.payload.search);
        localStorage.setItem(action.payload.email, JSON.stringify(parseItemsLS));
      }
    }
  },
});

LSMiddleware.startListening({
  actionCreator: deleteHistoryItem,
  effect: (action) => {
    let itemsLS;
    if (action.payload.email) {
      itemsLS = localStorage.getItem(action.payload.email);
      if (itemsLS) {
        const parseItemsLS = JSON.parse(itemsLS);
        parseItemsLS.history = parseItemsLS.history.filter((item: string) => item !== action.payload.search);
        localStorage.setItem(action.payload.email, JSON.stringify(parseItemsLS));
      }
    }
  },
});
