import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchPointTransactionsOfBuyingArgs,
} from "../../../../../commons/types/generated/types";
import {
  FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING,
  FETCH_POINT_TRANSACTIONS_OF_BUYING,
} from "./TransactionsBuying.queries";
import TransactionsBuyingPageUI from "./TransactionsBuying.preseter";

export default function TransactionsBuyingPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfBuying">,
    IQueryFetchPointTransactionsOfBuyingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_BUYING);

  const { data: buyingCountData } = useQuery<
    Pick<IQuery, "fetchPointTransactionsCountOfSelling">
  >(FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING);

  const count = buyingCountData?.fetchPointTransactionsCountOfSelling ?? 0;

  return (
    <TransactionsBuyingPageUI data={data} count={count} refetch={refetch} />
  );
}
