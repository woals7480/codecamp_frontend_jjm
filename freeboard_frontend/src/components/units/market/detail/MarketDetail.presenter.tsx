import { Tooltip } from "antd";
import { getDate } from "../../../../commons/utils/utils";
import * as S from "./MarketDetail.styles";
import { IMarketDetailUIProps } from "./MarketDetail.types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { uuidv4 } from "@firebase/util";
import DomPurify from "dompurify";

export default function MarketDetailUI(props: IMarketDetailUIProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Info>
              <S.Writer>판매자</S.Writer>
              <S.CreatedAt>
                Date: {getDate(props.data?.fetchUseditem.createdAt)}
              </S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
          <S.IconWrapper>
            <S.LinkIcon src="/images/board/detail/link.png" />
            <Tooltip
              title={`${
                props.data?.fetchUseditem.useditemAddress?.address ?? ""
              } ${
                props.data?.fetchUseditem.useditemAddress?.addressDetail ?? ""
              }`}
            >
              <S.LocationIcon src="/images/board/detail/location.png" />
            </Tooltip>
          </S.IconWrapper>
        </S.Header>
        <S.Body>
          <S.ProductDetailWrapper>
            <Slider {...settings}>
              {props.data?.fetchUseditem.images?.map((el) => (
                <div key={uuidv4()}>
                  <S.ProductImage
                    src={`https://storage.googleapis.com/${el}`}
                  />
                </div>
              ))}
            </Slider>
            <S.ProductDetail>
              <S.ProductInfo>
                <S.ProductName>{props.data?.fetchUseditem.name}</S.ProductName>
                <S.ProductRemarks>
                  {props.data?.fetchUseditem.remarks}
                </S.ProductRemarks>
                <S.ProductPrice>
                  {props.data?.fetchUseditem.price
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </S.ProductPrice>
                {props.data && (
                  <S.ProductContents
                    dangerouslySetInnerHTML={{
                      __html: DomPurify.sanitize(
                        props.data.fetchUseditem.contents
                      ),
                    }}
                  ></S.ProductContents>
                )}
              </S.ProductInfo>
              <S.ProductPickedWrapper>
                <S.PickedIcon onClick={props.onClickPick} />
                <S.PickedCount>
                  {props.data?.fetchUseditem.pickedCount}
                </S.PickedCount>
              </S.ProductPickedWrapper>
            </S.ProductDetail>
          </S.ProductDetailWrapper>
          <S.MapWrapper>
            <S.Map id="map"></S.Map>
          </S.MapWrapper>
        </S.Body>
      </S.CardWrapper>
      <S.ButtonWrapper>
        <S.Button>목록으로</S.Button>
        <S.Button>수정하기</S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
