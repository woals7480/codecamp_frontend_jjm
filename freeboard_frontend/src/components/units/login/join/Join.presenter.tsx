import * as S from "./Join.styles";
import { IJoinUIProps } from "./Join.types";

export default function JoinUI(props: IJoinUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.JoinWrapper>
          <S.JoinInput
            type="text"
            placeholder="Email"
            onChange={props.onChangeEmail}
          />
          <S.JoinInput
            type="text"
            placeholder="Name"
            onChange={props.onChangeName}
          />
          <S.JoinInput
            type="password"
            placeholder="Password"
            onChange={props.onChangePassword}
          />
          <S.JoinInput
            type="password"
            placeholder="Confirm Password"
            onChange={props.onChangeConfirm}
          />
          <S.ConfirmError>{props.confirmError}</S.ConfirmError>
          <S.JoinButton onClick={props.onClickJoinButton}>
            가입하기
          </S.JoinButton>
        </S.JoinWrapper>
      </S.Wrapper>
    </>
  );
}
