import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../../../commons/types/generated/types";

export interface ITextTokenProps {
  isMatched: boolean;
}

export interface IMyitemsPageUIProps {
  data?: Pick<IQuery, "fetchUseditemsISold">;
  onClickonBoardDetail: (marketId: string) => () => void;
  refetch: (
    variables?: Partial<IQueryFetchUseditemsISoldArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsISold">>>;
  onChangeKeyword: (value: string) => void;
  keyword: string;
  refetchCount: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsCountISold">>>;
  count?: number;
}
