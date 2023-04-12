import PaymentButtonPage from "../../../../commons/buttons/paymentButton";
import * as S from "./PointTransactions.styles";

export default function PointTransactionsPageUI() {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.OptionWrapper>
          <S.OptionCurrentPage>전체내역</S.OptionCurrentPage>
          <span style={{ margin: "0 10px" }}> | </span>
          <S.OptionNonCurrentPage>충전내역</S.OptionNonCurrentPage>
          <span style={{ margin: "0 10px" }}> | </span>
          <S.OptionNonCurrentPage>구매내역</S.OptionNonCurrentPage>
          <span style={{ margin: "0 10px" }}> | </span>
          <S.OptionNonCurrentPage>판매내역</S.OptionNonCurrentPage>
          <PaymentButtonPage />
        </S.OptionWrapper>
      </S.TopWrapper>
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>내용</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>거래 및 충전내역</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>잔액</S.ColumnHeaderBasic>
      </S.Row>

      {/* {props.data?.fetchUseditemsISold.map((el, index) => (
        <S.Row key={el._id} onClick={props.onClickonBoardDetail(el._id)}>
          <S.ColumnBasic>{index + 1}</S.ColumnBasic>
          <S.ColumnTitle>
            {el.name
              .replaceAll(props.keyword, `@%^*${props.keyword}@%^*`)
              .split("@%^*")
              .map((el) => (
                <S.TextToken key={uuidv4()} isMatched={props.keyword === el}>
                  {el}
                </S.TextToken>
              ))}
          </S.ColumnTitle>
          <S.ColumnBasic>{el.price}</S.ColumnBasic>
          <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
      <S.Footer>
        <Pagination02 refetch={props.refetch} count={props.count} />
      </S.Footer> */}
    </S.Wrapper>
  );
}
