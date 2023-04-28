import { getDate } from "../../../../../commons/utils/utils";
import { useMoveToPage } from "../../../../commons/hooks/useMovetoPage";
import Pagination02 from "../../../../commons/pagination/02/Pagination02.container";
import Searchbars02 from "../../../../commons/searchbars/02/Searchbars02.container";
import * as S from "./MyItems.styles";
import { IMyitemsPageUIProps } from "./MyItems.types";
import { v4 as uuidv4 } from "uuid";

export default function MyitemsPageUI(props: IMyitemsPageUIProps) {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.OptionWrapper>
          <S.OptionMyitems
            onClick={onClickMoveToPage("/mypages/mymarket/myitems")}
          >
            나의 상품
          </S.OptionMyitems>
          <span style={{ margin: "0 10px" }}> | </span>
          <S.OptionMyPicked
            onClick={onClickMoveToPage("/mypages/mymarket/mypicked")}
          >
            마이 찜
          </S.OptionMyPicked>
        </S.OptionWrapper>
        <Searchbars02
          refetch={props.refetch}
          onChangeKeyword={props.onChangeKeyword}
          refetchCount={props.refetchCount}
        />
      </S.TopWrapper>
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>번호</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>상품명</S.ColumnHeaderTitle>
        <S.ColumnHeaderSoldout></S.ColumnHeaderSoldout>
        <S.ColumnHeaderBasic>판매가격</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic></S.ColumnHeaderBasic>
      </S.Row>

      {props.data?.fetchUseditemsISold.map((el, index) => (
        <S.Row key={el._id}>
          <S.ColumnBasic onClick={props.onClickonBoardDetail(el._id)}>
            {index + 1}
          </S.ColumnBasic>
          <S.ColumnTitle onClick={props.onClickonBoardDetail(el._id)}>
            {el.name
              .replaceAll(props.keyword, `@%^*${props.keyword}@%^*`)
              .split("@%^*")
              .map((el) => (
                <S.TextToken key={uuidv4()} isMatched={props.keyword === el}>
                  {el}
                </S.TextToken>
              ))}
          </S.ColumnTitle>
          <S.ColumnSoldout>{el.soldAt && "판매완료"}</S.ColumnSoldout>
          <S.ColumnBasic onClick={props.onClickonBoardDetail(el._id)}>
            {el.price}
          </S.ColumnBasic>
          <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
          <S.ColumnBasic>
            <S.EditButton
              onClick={onClickMoveToPage(`/markets/${el._id}/edit`)}
            >
              수정하기
            </S.EditButton>
          </S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
      <S.Footer>
        <Pagination02 refetch={props.refetch} count={props.count} />
      </S.Footer>
    </S.Wrapper>
  );
}
