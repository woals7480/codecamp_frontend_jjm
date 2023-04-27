import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchPointTransactionsOfSellingArgs,
} from "../../../../../commons/types/generated/types";
import {
  FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING,
  FETCH_POINT_TRANSACTIONS_OF_SELLING,
} from "./TransactionsSelling.queries";
import TransactionsSellingPageUI from "./TransactionsSelling.preseter";

export default function TransactionsSellingPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfSelling">,
    IQueryFetchPointTransactionsOfSellingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_SELLING);

  const { data: sellingCountData } = useQuery<
    Pick<IQuery, "fetchPointTransactionsCountOfSelling">
  >(FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING);

  const count = sellingCountData?.fetchPointTransactionsCountOfSelling ?? 0;

  return (
    <TransactionsSellingPageUI data={data} count={count} refetch={refetch} />
  );
}
