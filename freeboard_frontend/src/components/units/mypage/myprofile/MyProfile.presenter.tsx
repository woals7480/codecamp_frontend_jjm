import { useMoveToPage } from "../../../commons/hooks/useMovetoPage";
import * as S from "./MyProfile.styles";
import { IMyProfilePageUIProps } from "./MyProfile.types";

export default function MyProfilePageUI(props: IMyProfilePageUIProps) {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Wrapper>
      <S.Row>
        <S.ColumnTitle>내 프로필</S.ColumnTitle>
        <S.Column>이름 : {props.userInfo.name}</S.Column>
        <S.Column>이메일 : {props.userInfo.email}</S.Column>
        <S.Column>포인트 : {props.userInfo.userPoint?.amount}</S.Column>
        <S.ChangeButton
          onClick={onClickMoveToPage("/mypages/myprofile/changepassword")}
        >
          비밀번호 변경
        </S.ChangeButton>
      </S.Row>
    </S.Wrapper>
  );
}
