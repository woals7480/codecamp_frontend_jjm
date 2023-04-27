import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchPointTransactionsOfBuyingArgs,
} from "../../../../../commons/types/generated/types";

export interface ITextTokenProps {
  isMatched: boolean;
}

export interface ITransactionsBuyingPageUIProps {
  data?: Pick<IQuery, "fetchPointTransactionsOfBuying">;
  count: number;
  refetch: (
    variables?: Partial<IQueryFetchPointTransactionsOfBuyingArgs> | undefined
  ) => Promise<
    ApolloQueryResult<Pick<IQuery, "fetchPointTransactionsOfBuying">>
  >;
}

export interface IColumnProps {
  isStatus?: string;
}
