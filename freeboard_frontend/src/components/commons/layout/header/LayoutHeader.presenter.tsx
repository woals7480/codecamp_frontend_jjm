import LogoutButtonPage from "../../buttons/logoutButton";
import { useMoveToPage } from "../../hooks/useMovetoPage";
import * as S from "./LayoutHeader.styles";
import { ILayoutHeaderUIProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <S.Logo onClick={onClickMoveToPage("/boards")}>🍓 딸기마켓</S.Logo>
      </S.LogoWrapper>
      {props.accessToken ? (
        <S.LoggedInWrapper>
          <S.LoggedInImg src="/images/avatar.png" />
          <S.LoggedInName>{props.data?.fetchUserLoggedIn.name}</S.LoggedInName>
          <LogoutButtonPage />
        </S.LoggedInWrapper>
      ) : (
        <S.ButtonWrapper>
          <S.Button onClick={onClickMoveToPage("/login")}>로그인</S.Button>
          <S.Button onClick={onClickMoveToPage("/join")}>회원가입</S.Button>
        </S.ButtonWrapper>
      )}
    </S.Wrapper>
  );
}
