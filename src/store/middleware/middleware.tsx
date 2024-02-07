import { createListenerMiddleware } from '@reduxjs/toolkit';
import { toggleFavoriteItem, updateFavoriteItems } from '../slice/favotiteSlice';
import { addHistoryItem, deleteHistoryItem, updateHistoryItem } from '../slice/historySlice';
import { addUser, logInUser, logOut } from '../slice/authenticationSlice';
import { PictureItemFront } from '../../utils/transformTypes';
import { addUserLS, getParseItemsLS, logOutLS, setParseItemsLS, updateUserInfoLS } from '../../utils/localStorageUtils';

export interface LSData {
  email: string;
  favorite: PictureItemFront[];
  history: string[];
  password: string;
  username: string;
}

export const LSMiddleware = createListenerMiddleware();
LSMiddleware.startListening({
  actionCreator: addUser,
  effect: (action, listenerApi) => {
    if (action.payload.email) {
      addUserLS(action.payload.username, action.payload.email, action.payload.password);
      let parseItems = updateUserInfoLS(action.payload.email);
      if (parseItems) {
        listenerApi.dispatch(updateFavoriteItems({ item: parseItems.favorite, email: parseItems.email }));
        listenerApi.dispatch(updateHistoryItem({ historyQuery: parseItems.history, email: parseItems.email }));
      }
    }
  },
});

LSMiddleware.startListening({
  actionCreator: logInUser,
  effect: (action, listenerApi) => {
    let parseItems = updateUserInfoLS(action.payload);
    if (parseItems) {
      listenerApi.dispatch(updateFavoriteItems({ item: parseItems.favorite, email: parseItems.email }));
      listenerApi.dispatch(updateHistoryItem({ historyQuery: parseItems.history, email: parseItems.email }));
    }
  },
});

LSMiddleware.startListening({
  actionCreator: logOut,
  effect: () => {
    logOutLS();
  },
});

LSMiddleware.startListening({
  actionCreator: toggleFavoriteItem,
  effect: (action) => {
    let parseItems = getParseItemsLS(action.payload.email);
    if (parseItems) {
      const isItemAlreadyAdded = parseItems.favorite.some(
        (item: PictureItemFront) => item.id === action.payload.item.id,
      );
      isItemAlreadyAdded
        ? (parseItems.favorite = parseItems.favorite.filter(
            (item: PictureItemFront) => item.id !== action.payload.item.id,
          ))
        : parseItems.favorite.unshift(action.payload.item);
      setParseItemsLS(action.payload.email, parseItems);
    }
  },
});

LSMiddleware.startListening({
  actionCreator: addHistoryItem,
  effect: (action) => {
    if (action.payload.email) {
      let parseItems = getParseItemsLS(action.payload.email);
      if (parseItems) {
        parseItems.history.unshift(action.payload.search);
        setParseItemsLS(action.payload.email, parseItems);
      }
    }
  },
});

LSMiddleware.startListening({
  actionCreator: deleteHistoryItem,
  effect: (action) => {
    if (action.payload.email) {
      let parseItems = getParseItemsLS(action.payload.email);
      if (parseItems) {
        parseItems.history = parseItems.history.filter((item: string) => item !== action.payload.search);
        setParseItemsLS(action.payload.email, parseItems);
      }
    }
  },
});
