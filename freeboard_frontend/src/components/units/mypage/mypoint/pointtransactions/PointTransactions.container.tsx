import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchPointTransactionsArgs,
} from "../../../../../commons/types/generated/types";
import PointTransactionsPageUI from "./PointTransactions.preseter";
import {
  FETCH_POINT_TRANSACTIONS,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING,
} from "./PointTransactions.queries";

export default function PointTransactionsPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchPointTransactions">,
    IQueryFetchPointTransactionsArgs
  >(FETCH_POINT_TRANSACTIONS);

  const { data: loadingCountData } = useQuery<
    Pick<IQuery, "fetchPointTransactionsCountOfLoading">
  >(FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING);

  const { data: buyingCountData } = useQuery<
    Pick<IQuery, "fetchPointTransactionsCountOfBuying">
  >(FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING);

  const { data: sellingCountData } = useQuery<
    Pick<IQuery, "fetchPointTransactionsCountOfSelling">
  >(FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING);

  console.log(loadingCountData?.fetchPointTransactionsCountOfLoading);
  console.log(buyingCountData?.fetchPointTransactionsCountOfBuying);
  console.log(sellingCountData?.fetchPointTransactionsCountOfSelling);

  const count =
    (loadingCountData?.fetchPointTransactionsCountOfLoading ?? 0) +
    (buyingCountData?.fetchPointTransactionsCountOfBuying ?? 0) +
    (sellingCountData?.fetchPointTransactionsCountOfSelling ?? 0);

  return (
    <PointTransactionsPageUI data={data} count={count} refetch={refetch} />
  );
}
