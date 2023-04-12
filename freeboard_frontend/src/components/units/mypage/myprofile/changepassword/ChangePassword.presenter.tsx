import * as S from "./ChangePassword.styles";
import { IChangePasswordPageUIProps } from "./ChangePassword.types";

export default function ChangePasswordPageUI(
  props: IChangePasswordPageUIProps
) {
  return (
    <S.Wrapper>
      <S.ChangePasswordForm
        onSubmit={props.handleSubmit(props.onClickChangeButton)}
      >
        <S.Column>
          <S.ColumnTitle>현재 비밀번호</S.ColumnTitle>
          <S.ColumnInput
            type="password"
            placeholder="현재 비밀번호를 입력해주세요."
            {...props.register("currentPassword")}
          />
        </S.Column>
        <S.Column>
          <S.ColumnTitle>새 비밀번호</S.ColumnTitle>
          <S.ColumnInput
            type="password"
            placeholder="새 비밀번호를 입력해주세요."
            {...props.register("newPassword")}
          />
        </S.Column>
        <S.Column>
          <S.ColumnTitle>새 비밀번호 확인</S.ColumnTitle>
          <S.ColumnInput
            type="password"
            placeholder="새 비밀번호를 확인해주세요."
            {...props.register("confirmPassword")}
          />
        </S.Column>
        <S.ButtonWrapper>
          <S.ChangeButton>변경하기</S.ChangeButton>
        </S.ButtonWrapper>
      </S.ChangePasswordForm>
    </S.Wrapper>
  );
}
