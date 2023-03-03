import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import LayoutMypageUI from "./LayoutMypage.presenter";
import { FETCH_USER_LOGGED_IN } from "./LayoutMypage.queries";

export default function LayoutMypage() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return <LayoutMypageUI data={data} />;
}
