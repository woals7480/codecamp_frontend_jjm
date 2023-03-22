import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import * as S from "./LayoutMypage.styles";
import { ILayoutMypageUIProps } from "./LayoutMypage.types";

export default function LayoutMypageUI(props: ILayoutMypageUIProps) {
  return (
    <S.Wrapper>
      <S.Title>MYPAGE</S.Title>
      <S.ProfileWrapper>
        <S.ProfileImage src="/images/avatar.png" />
        <S.ProfileName>{props.userInfo.name}</S.ProfileName>
        <DollarCircleOutlined />
        <div>{props.userInfo.userPoint?.amount}</div>
      </S.ProfileWrapper>
      <S.OptionWrapper>
        <S.Option>
          <S.OptionIcon>
            <ShoppingCartOutlined />
          </S.OptionIcon>
          <S.OptionTitle>내 장터</S.OptionTitle>
        </S.Option>
        <S.Option>
          <S.OptionIcon>
            <DollarCircleOutlined />
          </S.OptionIcon>
          <S.OptionTitle>내 포인트</S.OptionTitle>
        </S.Option>
        <S.Option>
          <S.OptionIcon>
            <SmileOutlined />
          </S.OptionIcon>
          <S.OptionTitle>내 프로필</S.OptionTitle>
        </S.Option>
      </S.OptionWrapper>
    </S.Wrapper>
  );
}
