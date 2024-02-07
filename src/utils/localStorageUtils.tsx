import { LSData } from '../types/types';
import { PictureItemFront } from '../utils/transformTypes';

export const getFavoriteItemsFromLS = (email: string): PictureItemFront[] => {
  let items = localStorage.getItem(email);
  let parseItem: PictureItemFront[];
  if (items) {
    parseItem = JSON.parse(items);
    return parseItem;
  }
  parseItem = [];
  return parseItem;
};

export const addUserLS = (username: string | undefined, email: string, password: string | undefined) => {
  if (email) {
    localStorage.setItem(
      email,
      JSON.stringify({
        username: username,
        email: email,
        password: password,
        favorite: [],
        history: [],
      }),
    );
  }
};

export const updateUserInfoLS = (email: string): LSData | undefined => {
  const items = localStorage.getItem(email);
  let parseItems: LSData;
  if (items) {
    parseItems = JSON.parse(items);
    localStorage.setItem('online', parseItems.email);
    return parseItems;
  }
};

export const logOutLS = () => {
  localStorage.removeItem('online');
};

export const getAuthLS = (): string | null => {
  return localStorage.getItem('online');
};

export const getParseItemsLS = (email: string): LSData | undefined => {
  const items = localStorage.getItem(email);
  let parseItems: LSData;
  if (items) {
    parseItems = JSON.parse(items);
    return parseItems;
  }
};

export const setParseItemsLS = (email: string, data: LSData) => {
  localStorage.setItem(email, JSON.stringify(data));
};
