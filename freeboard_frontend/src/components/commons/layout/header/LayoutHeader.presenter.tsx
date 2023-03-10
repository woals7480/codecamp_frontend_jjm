import { useMoveToPage } from "../../hooks/useMovetoPage";
import * as S from "./LayoutHeader.styles";
import { ILayoutHeaderUIProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <S.Logo onClick={onClickMoveToPage("/boards")}>π LIVE</S.Logo>
      </S.LogoWrapper>
      {props.data?.fetchUserLoggedIn ? (
        <S.LoggedInWrapper>
          <S.LoggedInImg src="/images/avatar.png" />
          <S.LoggedInName>{props.data?.fetchUserLoggedIn.name}</S.LoggedInName>
        </S.LoggedInWrapper>
      ) : (
        <S.ButtonWrapper>
          <S.Button onClick={onClickMoveToPage("/login")}>λ‘κ·ΈμΈ</S.Button>
          <S.Button onClick={onClickMoveToPage("/join")}>νμκ°μ</S.Button>
        </S.ButtonWrapper>
      )}
    </S.Wrapper>
  );
}
