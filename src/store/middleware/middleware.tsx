import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import { addFavoriteItem, updateFavoriteItems } from '../slice/favotiteSlice';
import { addHistoryItem, updateHistoryItem } from '../slice/historySlice';
import { addUser, logInUser } from '../slice/authenticationSlice';

import { useAppDispatch } from '../hook';
import { PictureItemFront } from '../../utils/transformTypes';
// interface AuthState {
//   username?: string;
//   email?: string;
//   password?: string;
// }
// const initialAuthState: AuthState = {
//   username: '',
//   email: '',
//   password: '',
// };

export const LSMiddleware = createListenerMiddleware();
LSMiddleware.startListening({
  actionCreator: addUser,
  effect: (action) => {
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
      localStorage.setItem('online', action.payload.email);
    }
  },
});

LSMiddleware.startListening({
  actionCreator: logInUser,
  effect: (action, listenerApi) => {
    const itemsLS = localStorage.getItem(action.payload);
    let parseItemsLS;
    if (itemsLS) {
      parseItemsLS = JSON.parse(itemsLS);
      listenerApi.dispatch(updateFavoriteItems({ item: parseItemsLS.favorite, email: parseItemsLS.email }));
      listenerApi.dispatch(updateHistoryItem({ historyQuery: parseItemsLS.history, email: parseItemsLS.email }));
      localStorage.setItem('online', parseItemsLS.email);
    }
  },
});

LSMiddleware.startListening({
  actionCreator: addFavoriteItem,
  effect: (action) => {
    const itemsLS = localStorage.getItem(action.payload.email);
    if (itemsLS) {
      const parseItemsLS = JSON.parse(itemsLS);
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
    console.log(action);
    let itemsLS;
    if (action.payload.email) {
      itemsLS = localStorage.getItem(action.payload.email);
      if (itemsLS) {
        const parseItemsLS = JSON.parse(itemsLS);
        parseItemsLS.history.unshift(action.payload.search);
        localStorage.setItem(action.payload.email, JSON.stringify(parseItemsLS));
      }
    }

    // if (itemsLS) {
    //   const parseItemsLS = JSON.parse(itemsLS);
    //   parseItemsLS.favorite.unshift(action.payload.item);
    //   localStorage.setItem(action.payload.email, JSON.stringify(parseItemsLS));
    // }
  },
});

// listenerMiddleware.startListening({
//     actionCreator: resourceRequested,
//     effect: async (action, listenerApi) => {
//       const { name, args } = action.payload
//       listenerApi.dispatch(resourceLoading())

//       const res = await serverApi.fetch(`/api/${name}`, ...args)
//       listenerApi.dispatch(resourceLoaded(res.data))
//     },
//   })
