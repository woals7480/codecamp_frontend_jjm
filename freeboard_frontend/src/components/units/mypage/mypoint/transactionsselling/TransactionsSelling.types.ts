import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchPointTransactionsOfSellingArgs,
} from "../../../../../commons/types/generated/types";

export interface ITextTokenProps {
  isMatched: boolean;
}

export interface ITransactionsSellingPageUIProps {
  data?: Pick<IQuery, "fetchPointTransactionsOfSelling">;
  count: number;
  refetch: (
    variables?: Partial<IQueryFetchPointTransactionsOfSellingArgs> | undefined
  ) => Promise<
    ApolloQueryResult<Pick<IQuery, "fetchPointTransactionsOfSelling">>
  >;
}

export interface IColumnProps {
  isStatus?: string;
}
