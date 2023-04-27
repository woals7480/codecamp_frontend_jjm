import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchPointTransactionsArgs,
} from "../../../../../commons/types/generated/types";
import TransactionsLoadingPageUI from "./TransactionsLoading.preseter";
import {
  FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_OF_LOADING,
} from "./TransactionsLoading.queries";

export default function TransactionsLoadingPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfLoading">,
    IQueryFetchPointTransactionsArgs
  >(FETCH_POINT_TRANSACTIONS_OF_LOADING);

  const { data: loadingCountData } = useQuery<
    Pick<IQuery, "fetchPointTransactionsCountOfLoading">
  >(FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING);

  const count = loadingCountData?.fetchPointTransactionsCountOfLoading ?? 0;

  return (
    <TransactionsLoadingPageUI data={data} count={count} refetch={refetch} />
  );
}
