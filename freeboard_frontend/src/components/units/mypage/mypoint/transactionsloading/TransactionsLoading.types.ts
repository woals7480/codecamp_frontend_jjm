import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchPointTransactionsArgs,
} from "../../../../../commons/types/generated/types";

export interface ITextTokenProps {
  isMatched: boolean;
}

export interface ITransactionsLoadingPageUIProps {
  data?: Pick<IQuery, "fetchPointTransactionsOfLoading">;
  count: number;
  refetch: (
    variables?: Partial<IQueryFetchPointTransactionsArgs> | undefined
  ) => Promise<
    ApolloQueryResult<Pick<IQuery, "fetchPointTransactionsOfLoading">>
  >;
}

export interface IColumnProps {
  isStatus?: string;
}
