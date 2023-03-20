import * as S from "./marketList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { IMarketListUIProps } from "./marketList.types";
import { HeartFilled } from "@ant-design/icons";
import Link from "next/link";

export default function MarketListUI(props: IMarketListUIProps) {
  return (
    <S.Wrapper>
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
    </S.Wrapper>
  );
}
