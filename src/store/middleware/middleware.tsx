import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import { addFavoriteItem } from '../slice/favotiteSlice';
import { addUser } from '../slice/authenticationSlice';

interface AuthState {
  username?: string;
  email?: string;
  password?: string;
}
const initialAuthState: AuthState = {
  username: '',
  email: '',
  password: '',
};

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
    }

    console.log(action.payload);
  },
});
LSMiddleware.startListening({
  actionCreator: addFavoriteItem,
  effect: (action) => {
    console.log(action.payload);
    const itemsLS = localStorage.getItem(action.payload.email);
    if (itemsLS) {
      const parseItemsLS = JSON.parse(itemsLS);
      parseItemsLS.favorite.unshift(action.payload.item);
      localStorage.setItem(action.payload.email, JSON.stringify(parseItemsLS));
    }
    // console.log('added: ', action.payload);
    // const ls = localStorage.getItem('fgfgfg@mail.ru');
    // let lsParse;
    // if (ls) {
    //   lsParse = JSON.parse(ls);
    // }
    // // lsParse.favorite = [];
    // lsParse.favorite.concat(action.payload);
    // console.log(lsParse);
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
