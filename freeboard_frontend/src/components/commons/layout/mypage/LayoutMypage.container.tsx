import { useRecoilValue } from "recoil";
import { userInfoState } from "../../../../commons/store";
import LayoutMypageUI from "./LayoutMypage.presenter";

export default function LayoutMypage() {
  const userInfo = useRecoilValue(userInfoState);
  console.log(userInfo);
  return <LayoutMypageUI userInfo={userInfo} />;
}
