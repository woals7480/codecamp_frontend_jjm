import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  onClickMoveToBoardNew: () => void;
  onClickonBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  data?: Pick<IQuery, "fetchBoards">;
  count?: number;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}
