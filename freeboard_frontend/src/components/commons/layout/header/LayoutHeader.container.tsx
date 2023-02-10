import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "../../../../commons/store";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader() {
  const router = useRouter();
  const [isLogged, setIsLogged] = useRecoilState(isLoggedInState);
  console.log(isLogged);
  const onClickLogo = () => {
    void router.push("/boards");
  };

  const onClickMoveToLogin = () => {
    void router.push("/login");
  };

  const onClickMoveToJoin = () => {
    void router.push("/join");
  };

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickMoveToLogin={onClickMoveToLogin}
      onClickMoveToJoin={onClickMoveToJoin}
      isLogged={isLogged}
    />
  );
}
