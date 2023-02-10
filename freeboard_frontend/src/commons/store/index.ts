import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const isLoggedInState = atom({
  key: "isLoggedInState",
  default: false,
});
