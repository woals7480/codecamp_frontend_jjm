import { atom } from "recoil";

interface IUserInfoProps {
  _id?: string;
  email?: string;
  name?: string;
  userPoint?: {
    _id: string;
    amount: number;
  };
}

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const userInfoState = atom<IUserInfoProps>({
  key: "userInfoState",
  default: {},
});
