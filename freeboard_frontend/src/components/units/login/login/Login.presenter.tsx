import * as S from "./Login.styles";
import { ILoginUIProps } from "./Login.types";

export default function LoginUI(props: ILoginUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.LoginWrapper>
          <S.LoginForm onSubmit={props.handleSubmit(props.onClickLoginButton)}>
            <S.LoginInpuWrapper>
              <S.LoginInput
                type="text"
                placeholder="Email"
                {...props.register("email")}
              />
              <S.LoginInputError>
                {props.formState.errors.email?.message}
              </S.LoginInputError>
            </S.LoginInpuWrapper>
            <S.LoginInpuWrapper>
              <S.LoginInput
                type="password"
                placeholder="Password"
                {...props.register("password")}
              />
              <S.LoginInputError>
                {props.formState.errors.password?.message}
              </S.LoginInputError>
            </S.LoginInpuWrapper>
            <S.LoginButton>로그인</S.LoginButton>
          </S.LoginForm>
          <S.JoinButton onClick={props.onClickJoinButton}>
            회원가입
          </S.JoinButton>
        </S.LoginWrapper>
      </S.Wrapper>
    </>
  );
}
