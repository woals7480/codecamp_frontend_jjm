import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
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
  ) =>
    | Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsIPicked">>>
    | Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsISold">>>;
}

export interface IPagination02UIProps {
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  startPage: number;
  lastPage: number;
  activedPage: number;
}
