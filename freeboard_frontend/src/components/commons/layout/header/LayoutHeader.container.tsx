import { gql, useQuery } from "@apollo/client";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import { IQuery } from "../../../../commons/types/generated/types";
import LayoutHeaderUI from "./LayoutHeader.presenter";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      userPoint {
        _id
        amount
      }
    }
  }
`;

export default function LayoutHeader() {
  const accessToken = useRecoilValue(accessTokenState);

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return <LayoutHeaderUI data={data} accessToken={accessToken} />;
}
