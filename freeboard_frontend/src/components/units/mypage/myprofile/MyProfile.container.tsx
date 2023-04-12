import { useRecoilValue } from "recoil";
import MyProfilePageUI from "./MyProfile.presenter";
import { userInfoState } from "../../../../commons/store";

export default function MyProfilePage() {
  const userInfo = useRecoilValue(userInfoState);

  return <MyProfilePageUI userInfo={userInfo} />;
}
