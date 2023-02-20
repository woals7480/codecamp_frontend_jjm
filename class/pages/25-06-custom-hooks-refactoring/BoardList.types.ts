import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  onClickMoveToBoardNew: () => void;
  onClickonBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onChangeKeyword: (value: string) => void;
  keyword: string;
  data?: Pick<IQuery, "fetchBoards">;
  count?: number;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchBoardsCount: (
    variables?: Partial<IQueryFetchBoardsCountArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
}

export interface ITextTokenProps {
  isMatched: boolean;
}
