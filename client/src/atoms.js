import { atom, selector } from "recoil";

export const cartState = atom({
  key: "cartState",
  default: [],
});

export const userState = atom({
  key: "userState",
  default: {},
});

export const jwt = atom({
  key: "jwt",
  default: "",
});

export const cartItemsSelector = selector({
  key: "cartItemsSelector",
  get: ({ get }) => {
    return [];
  },
});
