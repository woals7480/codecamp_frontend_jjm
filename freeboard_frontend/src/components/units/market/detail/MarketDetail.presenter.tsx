import { Tooltip } from "antd";
import { getDate } from "../../../../commons/utils/utils";
import * as S from "./MarketDetail.styles";
import { IMarketDetailUIProps } from "./MarketDetail.types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { uuidv4 } from "@firebase/util";
import DomPurify from "dompurify";
import { useMoveToPage } from "../../../commons/hooks/useMovetoPage";

export default function MarketDetailUI(props: IMarketDetailUIProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Info>
              <S.Writer>
                {props.dataUseditem?.fetchUseditem.seller?.name}
              </S.Writer>
              <S.CreatedAt>
                Date: {getDate(props.dataUseditem?.fetchUseditem.createdAt)}
              </S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
          <S.IconWrapper>
            <S.LinkIcon src="/images/board/detail/link.png" />
            <Tooltip
              title={`${
                props.dataUseditem?.fetchUseditem.useditemAddress?.address ?? ""
              } ${
                props.dataUseditem?.fetchUseditem.useditemAddress
                  ?.addressDetail ?? ""
              }`}
            >
              <S.LocationIcon src="/images/board/detail/location.png" />
            </Tooltip>
          </S.IconWrapper>
        </S.Header>
        <S.Body>
          <S.ProductDetailWrapper>
            <Slider {...settings}>
              {props.dataUseditem?.fetchUseditem.images?.map((el) => (
                <div key={uuidv4()}>
                  <S.ProductImage
                    src={`https://storage.googleapis.com/${el}`}
                  />
                </div>
              ))}
            </Slider>
            <S.ProductDetail>
              <S.ProductInfo>
                <S.ProductName>
                  {props.dataUseditem?.fetchUseditem.name}
                </S.ProductName>
                <S.ProductRemarks>
                  {props.dataUseditem?.fetchUseditem.remarks}
                </S.ProductRemarks>
                <S.ProductPrice>
                  {props.dataUseditem?.fetchUseditem.price
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </S.ProductPrice>
                {props.dataUseditem && (
                  <S.ProductContents
                    dangerouslySetInnerHTML={{
                      __html: DomPurify.sanitize(
                        props.dataUseditem.fetchUseditem.contents
                      ),
                    }}
                  ></S.ProductContents>
                )}
              </S.ProductInfo>
              <S.ProductPickedWrapper>
                {props.isPicked ? (
                  <S.PickedIcon onClick={props.onClickPick} />
                ) : (
                  <S.NonPickedIcon onClick={props.onClickPick} />
                )}

                <S.PickedCount>
                  {props.dataUseditem?.fetchUseditem.pickedCount}
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
        <S.Button onClick={onClickMoveToPage("/markets")}>목록으로</S.Button>
        <S.Button onClick={props.onClickBuying}>구매하기</S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
