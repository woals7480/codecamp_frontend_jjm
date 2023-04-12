import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../../commons/types/generated/types";

export interface ITextTokenProps {
  isMatched: boolean;
}

export interface IMyPickedPageUIProps {
  data?: Pick<IQuery, "fetchUseditemsIPicked">;
  onClickonBoardDetail: (marketId: string) => () => void;
  refetch: (
    variables?: Partial<IQueryFetchUseditemsIPickedArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsIPicked">>>;
  onChangeKeyword: (value: string) => void;
  keyword: string;
  refetchCount: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsCountIPicked">>>;
  count?: number;
}
