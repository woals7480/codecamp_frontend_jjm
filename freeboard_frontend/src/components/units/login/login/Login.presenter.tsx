import * as S from "./Login.styles";
import { ILoginUIProps } from "./Login.types";

export default function LoginUI(props: ILoginUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.LoginWrapper>
          <S.LoginForm>
            <S.LoginInput
              type="text"
              placeholder="Email"
              onChange={props.onChangeEmail}
            />
            <S.LoginInput
              type="password"
              placeholder="Password"
              onChange={props.onChangePassword}
            />
            <S.LoginButton onClick={props.onClickLoginButton}>
              로그인
            </S.LoginButton>
          </S.LoginForm>
          <S.JoinButton onClick={props.onClickJoinButton}>
            회원가입
          </S.JoinButton>
        </S.LoginWrapper>
      </S.Wrapper>
    </>
  );
}
