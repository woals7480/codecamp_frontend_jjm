import * as S from "./LayoutHeader.styles";
import { ILayoutHeaderProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <S.Logo onClick={props.onClickLogo}>💎 LIVE</S.Logo>
      </S.LogoWrapper>
      <S.ButtonWrapper>
        <S.Button onClick={props.onClickMoveToLogin}>로그인</S.Button>
        <S.Button>회원가입</S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
