import LoginInputs from "../../../commons/inputs/loginInputs";
import * as S from "./Login.styles";
import { ILoginUIProps } from "./Login.types";

export default function LoginUI(props: ILoginUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.LoginWrapper>
          <S.LoginForm onSubmit={props.handleSubmit(props.onClickLoginButton)}>
            <S.LoginInpuWrapper>
              <LoginInputs
                type="text"
                placeholder="Email"
                register={props.register("email")}
              />
              <S.LoginInputError>
                {props.formState.errors.email?.message}
              </S.LoginInputError>
            </S.LoginInpuWrapper>
            <S.LoginInpuWrapper>
              <LoginInputs
                type="password"
                placeholder="Password"
                register={props.register("password")}
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
