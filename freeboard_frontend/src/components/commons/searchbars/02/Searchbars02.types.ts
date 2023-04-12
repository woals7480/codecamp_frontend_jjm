import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
  IQueryFetchUseditemsISoldArgs,
} from "../../../../commons/types/generated/types";

export interface ISearchbars02Props {
  onChangeKeyword: (value: string) => void;
  refetch: (
    variables?:
      | Partial<IQueryFetchUseditemsIPickedArgs>
      | undefined
      | Partial<IQueryFetchUseditemsISoldArgs>
  ) =>
    | Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsIPicked">>>
    | Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsISold">>>;
  refetchCount: (
    variables?: Partial<OperationVariables> | undefined
  ) =>
    | Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsCountISold">>>
    | Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsCountIPicked">>>;
}

export interface ISearchbar02UIProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
