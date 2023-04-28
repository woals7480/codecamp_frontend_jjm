import { HeartFilled } from "@ant-design/icons";
import * as S from "./MarketBestitems.styles";
import { IMarketBestitemsPageUIProps } from "./MarketBestitems.types";
import { useMoveToPage } from "../../../commons/hooks/useMovetoPage";

export default function MarketBestitemsPageUI(
  props: IMarketBestitemsPageUIProps
) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      <S.TItle>베스트 상품</S.TItle>
      <S.ItemsWrapper>
        {props.data?.fetchUseditemsOfTheBest.map((el) => (
          <S.ItemWrapper
            key={el._id}
            onClick={onClickMoveToPage(`/markets/${el._id}`)}
          >
            <S.ImageWrapper>
              {el.images && (el.images.length === 0 || !el.images[0]) && (
                <S.NoImage>사진없음</S.NoImage>
              )}
              {el.images && el.images.length !== 0 && el.images[0] && (
                <S.Image
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                />
              )}
            </S.ImageWrapper>
            <S.InfoWrapper>
              <S.TextWrapper>
                <S.Name>{el.name}</S.Name>
                <S.Remarks>{el.remarks}</S.Remarks>
                <S.Price>{el.price}</S.Price>
              </S.TextWrapper>
              <S.PickedWrapper>
                <S.PickedIcon>
                  <HeartFilled />
                </S.PickedIcon>
                <S.PickedCount>{el.pickedCount}</S.PickedCount>
              </S.PickedWrapper>
            </S.InfoWrapper>
          </S.ItemWrapper>
        ))}
      </S.ItemsWrapper>
    </S.Wrapper>
  );
}
