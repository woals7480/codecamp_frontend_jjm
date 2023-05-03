import InfiniteScroll from "react-infinite-scroller";
import { HeartFilled } from "@ant-design/icons";
import Link from "next/link";
import { IMarketListUIProps } from "./MarketList.types";
import * as S from "./MarketList.styles";
import { useMoveToPage } from "../../../commons/hooks/useMovetoPage";

export default function MarketListUI(props: IMarketListUIProps) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      <S.SoldoutWrapper>
        <S.SoldoutText
          isSold={!props.isSoldout}
          onClick={props.onClickNonSoldoutItem}
        >
          판매중 상품
        </S.SoldoutText>
        <span> | </span>
        <S.SoldoutText
          isSold={props.isSoldout}
          onClick={props.onClickSoldoutItem}
        >
          판매된 상품
        </S.SoldoutText>
      </S.SoldoutWrapper>
      <S.InfiniteScrollWrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          <div>
            {props.data?.fetchUseditems.map((el) => (
              <Link href={`/markets/${el._id}`} key={el._id}>
                <S.ProductWrapper>
                  <S.ImageWrapper>
                    {el.images && (el.images.length === 0 || !el.images[0]) && (
                      <S.NoImage>사진없음</S.NoImage>
                    )}
                    {el.images && el.images.length !== 0 && el.images[0] && (
                      <S.ProductImage
                        src={`https://storage.googleapis.com/${el.images[0]}`}
                      />
                    )}
                  </S.ImageWrapper>
                  <S.InfoWrapper>
                    <S.InfoName>{el.name}</S.InfoName>
                    <S.InfoRemarks>{el.remarks}</S.InfoRemarks>
                    <S.InfoPicked>
                      <S.PickedIcon>
                        <HeartFilled />
                      </S.PickedIcon>
                      <S.PickedCount>{el.pickedCount}</S.PickedCount>
                    </S.InfoPicked>
                  </S.InfoWrapper>
                  <S.PriceWrapper>
                    <S.InfoPrice>
                      {el.price
                        ?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      원
                    </S.InfoPrice>
                  </S.PriceWrapper>
                </S.ProductWrapper>
              </Link>
            ))}
          </div>
        </InfiniteScroll>
      </S.InfiniteScrollWrapper>
      <S.ButtonWrapper>
        <Link href="/markets/new">
          <a style={{ textDecoration: "none" }}>
            <S.Button>
              <S.PencilIcon src="/images/board/list/write.png" /> 상품 등록하기
            </S.Button>
          </a>
        </Link>
      </S.ButtonWrapper>
      {props.viewItemsList && (
        <S.ViewItemsWrapper>
          <S.ViewItemsTitle>오늘 본 상품</S.ViewItemsTitle>
          {props.viewItemsList.map((el) => (
            <S.ViewitemWrapper
              key={el?._id}
              onClick={onClickMoveToPage(`/markets/${el?._id ?? ""}`)}
            >
              <S.ViewitemPickedWrapper>
                <S.ViewitemPickedIcon>
                  <HeartFilled />
                </S.ViewitemPickedIcon>
                <S.ViewitemPickedCount>{el?.pickedCount}</S.ViewitemPickedCount>
              </S.ViewitemPickedWrapper>
              <S.ViewitemImageWrapper>
                {el?.images && (el?.images.length === 0 || !el.images[0]) && (
                  <S.NoImage>사진없음</S.NoImage>
                )}
                {el?.images && el?.images.length !== 0 && el?.images[0] && (
                  <S.ViewitemImage
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                  />
                )}
              </S.ViewitemImageWrapper>
              <S.ViewitemText>
                <S.ViewitemName>{el?.name}</S.ViewitemName>
                <S.ViewitemRemarks>{el?.remarks}</S.ViewitemRemarks>
                <S.ViewitemPrice>
                  {" "}
                  {el?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </S.ViewitemPrice>
              </S.ViewitemText>
            </S.ViewitemWrapper>
          ))}
        </S.ViewItemsWrapper>
      )}
    </S.Wrapper>
  );
}
