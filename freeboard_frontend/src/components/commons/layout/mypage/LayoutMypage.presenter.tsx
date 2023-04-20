import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import * as S from "./LayoutMypage.styles";
import { ILayoutMypageUIProps } from "./LayoutMypage.types";
import { useMoveToPage } from "../../hooks/useMovetoPage";

export default function LayoutMypageUI(props: ILayoutMypageUIProps) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      <S.Title>MYPAGE</S.Title>
      <S.ProfileWrapper>
        <S.ProfileImage src="/images/avatar.png" />
        <S.ProfileName>{props.userInfo.name}</S.ProfileName>
        <S.ProfilePoint>
          <S.PointIcon>
            <DollarCircleOutlined />
          </S.PointIcon>
          <S.Point>{props.userInfo.userPoint?.amount}</S.Point>
        </S.ProfilePoint>
      </S.ProfileWrapper>
      <S.OptionWrapper>
        <S.Option>
          <S.OptionIcon>
            <SmileOutlined />
          </S.OptionIcon>
          {props.page === "myprofile" ? (
            <S.SelectOptionTitle
              onClick={onClickMoveToPage("/mypages/myprofile")}
            >
              내 프로필
            </S.SelectOptionTitle>
          ) : (
            <S.OptionTitle onClick={onClickMoveToPage("/mypages/myprofile")}>
              내 프로필
            </S.OptionTitle>
          )}
        </S.Option>
        <S.Option>
          <S.OptionIcon>
            <ShoppingCartOutlined />
          </S.OptionIcon>
          {props.page === "mymarket" ? (
            <S.SelectOptionTitle
              onClick={onClickMoveToPage("/mypages/mymarket/myitems")}
            >
              내 장터
            </S.SelectOptionTitle>
          ) : (
            <S.OptionTitle
              onClick={onClickMoveToPage("/mypages/mymarket/myitems")}
            >
              내 장터
            </S.OptionTitle>
          )}
        </S.Option>
        <S.Option>
          <S.OptionIcon>
            <DollarCircleOutlined />
          </S.OptionIcon>
          {props.page === "mypoint" ? (
            <S.SelectOptionTitle
              onClick={onClickMoveToPage("/mypages/mypoint/pointtransactions")}
            >
              내 포인트
            </S.SelectOptionTitle>
          ) : (
            <S.OptionTitle
              onClick={onClickMoveToPage("/mypages/mypoint/pointtransactions")}
            >
              내 포인트
            </S.OptionTitle>
          )}
        </S.Option>
      </S.OptionWrapper>
    </S.Wrapper>
  );
}
