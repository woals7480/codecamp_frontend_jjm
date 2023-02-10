import JoinInputs from "../../../commons/inputs/joinInputs";
import * as S from "./Join.styles";
import { IJoinUIProps } from "./Join.types";

export default function JoinUI(props: IJoinUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.JoinWrapper>
          <S.JoinForm onSubmit={props.handleSubmit(props.onClickJoinButton)}>
            <S.JoinInputWrapper>
              <JoinInputs
                type="text"
                placeholder="Email"
                register={props.register("email")}
              />
              <S.JoinInputError>
                {props.formState.errors.email?.message}
              </S.JoinInputError>
            </S.JoinInputWrapper>

            <S.JoinInputWrapper>
              <JoinInputs
                type="text"
                placeholder="Name"
                register={props.register("name")}
              />
              <S.JoinInputError>
                {props.formState.errors.name?.message}
              </S.JoinInputError>
            </S.JoinInputWrapper>

            <S.JoinInputWrapper>
              <JoinInputs
                type="password"
                placeholder="Password"
                register={props.register("password")}
              />
              <S.JoinInputError>
                {props.formState.errors.password?.message}
              </S.JoinInputError>
            </S.JoinInputWrapper>

            <S.JoinInputWrapper>
              <JoinInputs
                type="password"
                placeholder="Confirm Password"
                register={props.register("confirm")}
              />
              <S.JoinInputError>
                {props.formState.errors.confirm?.message}
              </S.JoinInputError>
            </S.JoinInputWrapper>

            <S.ConfirmError>{props.confirmError}</S.ConfirmError>
            <S.JoinButton>가입하기</S.JoinButton>
          </S.JoinForm>
        </S.JoinWrapper>
      </S.Wrapper>
    </>
  );
}
