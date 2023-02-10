import * as S from "./Join.styles";
import { IJoinUIProps } from "./Join.types";

export default function JoinUI(props: IJoinUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.JoinWrapper>
          <S.JoinForm onSubmit={props.handleSubmit(props.onClickJoinButton)}>
            <S.JoinInputWrapper>
              <S.JoinInput
                type="text"
                placeholder="Email"
                {...props.register("email")}
              />
              <S.JoinInpuError>
                {props.formState.errors.email?.message}
              </S.JoinInpuError>
            </S.JoinInputWrapper>

            <S.JoinInputWrapper>
              <S.JoinInput
                type="text"
                placeholder="Name"
                {...props.register("name")}
              />
              <S.JoinInpuError>
                {props.formState.errors.name?.message}
              </S.JoinInpuError>
            </S.JoinInputWrapper>

            <S.JoinInputWrapper>
              <S.JoinInput
                type="password"
                placeholder="Password"
                {...props.register("password")}
              />
              <S.JoinInpuError>
                {props.formState.errors.password?.message}
              </S.JoinInpuError>
            </S.JoinInputWrapper>

            <S.JoinInputWrapper>
              <S.JoinInput
                type="password"
                placeholder="Confirm Password"
                {...props.register("confirm")}
              />
              <S.JoinInpuError>
                {props.formState.errors.confirm?.message}
              </S.JoinInpuError>
            </S.JoinInputWrapper>

            <S.ConfirmError>{props.confirmError}</S.ConfirmError>
            <S.JoinButton>가입하기</S.JoinButton>
          </S.JoinForm>
        </S.JoinWrapper>
      </S.Wrapper>
    </>
  );
}
