import { getDate } from "../../../../../commons/utils/utils";
import PaymentButtonPage from "../../../../commons/buttons/paymentButton";
import { useMoveToPage } from "../../../../commons/hooks/useMovetoPage";
import Pagination02 from "../../../../commons/pagination/02/Pagination02.container";
import * as S from "./TransactionsLoading.styles";
import { ITransactionsLoadingPageUIProps } from "./TransactionsLoading.types";

export default function TransactionsLoadingPageUI(
  props: ITransactionsLoadingPageUIProps
) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.OptionWrapper>
          <S.OptionNonCurrentPage
            onClick={onClickMoveToPage("/mypages/mypoint/pointtransactions")}
          >
            전체내역
          </S.OptionNonCurrentPage>
          <span style={{ margin: "0 10px" }}> | </span>
          <S.OptionCurrentPage
            onClick={onClickMoveToPage("/mypages/mypoint/transactionsloading")}
          >
            충전내역
          </S.OptionCurrentPage>
          <span style={{ margin: "0 10px" }}> | </span>
          <S.OptionNonCurrentPage
            onClick={onClickMoveToPage("/mypages/mypoint/transactionsbuying")}
          >
            구매내역
          </S.OptionNonCurrentPage>
          <span style={{ margin: "0 10px" }}> | </span>
          <S.OptionNonCurrentPage
            onClick={onClickMoveToPage("/mypages/mypoint/transactionsselling")}
          >
            판매내역
          </S.OptionNonCurrentPage>
          <PaymentButtonPage />
        </S.OptionWrapper>
      </S.TopWrapper>
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>충전일</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>결제ID</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>충전내역</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>충전 후 잔액</S.ColumnHeaderBasic>
      </S.Row>

      {props.data?.fetchPointTransactionsOfLoading.map((el) => (
        <S.Row key={el._id}>
          <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
          <S.ColumnBasic>{el.impUid}</S.ColumnBasic>
          <S.ColumnBasic>{el.amount}</S.ColumnBasic>
          <S.ColumnBasic>{`₩ ${el.balance.toLocaleString()}원`}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
      <S.Footer>
        <Pagination02 refetch={props.refetch} count={props.count} />
      </S.Footer>
    </S.Wrapper>
  );
}
