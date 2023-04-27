import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchPointTransactionsArgs,
  IQueryFetchPointTransactionsOfBuyingArgs,
  IQueryFetchPointTransactionsOfSellingArgs,
  IQueryFetchUseditemsIPickedArgs,
  IQueryFetchUseditemsISoldArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export interface IPagination02Props {
  count?: number;
  refetch: (
    variables?:
      | Partial<IQueryFetchUseditemsIPickedArgs>
      | undefined
      | Partial<IQueryFetchUseditemsISoldArgs>
      | Partial<IQueryFetchPointTransactionsArgs>
      | Partial<IQueryFetchPointTransactionsArgs>
      | Partial<IQueryFetchPointTransactionsOfSellingArgs>
      | Partial<IQueryFetchPointTransactionsOfBuyingArgs>
  ) =>
    | Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsIPicked">>>
    | Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsISold">>>
    | Promise<ApolloQueryResult<Pick<IQuery, "fetchPointTransactions">>>
    | Promise<
        ApolloQueryResult<Pick<IQuery, "fetchPointTransactionsOfLoading">>
      >
    | Promise<
        ApolloQueryResult<Pick<IQuery, "fetchPointTransactionsOfSelling">>
      >
    | Promise<
        ApolloQueryResult<Pick<IQuery, "fetchPointTransactionsOfBuying">>
      >;
}

export interface IPagination02UIProps {
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  startPage: number;
  lastPage: number;
  activedPage: number;
}
