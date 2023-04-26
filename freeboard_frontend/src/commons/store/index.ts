import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

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

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});
