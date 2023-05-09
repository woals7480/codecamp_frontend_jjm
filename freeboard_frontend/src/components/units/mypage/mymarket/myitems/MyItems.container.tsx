import { useApolloClient, useQuery } from "@apollo/client";
import MyitemsPageUI from "./MyItems.presenter";
import {
  FETCH_USEDITEM,
  FETCH_USEDITEMS_COUNT_ISOLD,
  FETCH_USEDITEMS_ISOLD,
} from "./MyItems.queries";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { useState } from "react";
import _ from "lodash";

export default function MyitemsPage() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const client = useApolloClient();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditemsISold">,
    IQueryFetchUseditemsISoldArgs
  >(FETCH_USEDITEMS_ISOLD);

  const { data: dataISoldCount, refetch: refetchCount } = useQuery<
    Pick<IQuery, "fetchUseditemsCountISold">
  >(FETCH_USEDITEMS_COUNT_ISOLD);

  const getDebounce = _.debounce(async (value) => {
    await client.query({
      query: FETCH_USEDITEM,
      variables: { useditemId: value },
    });
  }, 400);
  const onClickonBoardDetail = (marketId: string) => () => {
    void router.push(`/markets/${marketId}`);
  };

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  const prefetchitem = (useditemId: string) => async () => {
    void getDebounce(useditemId);
  };

  return (
    <MyitemsPageUI
      data={data}
      onClickonBoardDetail={onClickonBoardDetail}
      refetch={refetch}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword}
      refetchCount={refetchCount}
      count={
        dataISoldCount?.fetchUseditemsCountISold === 0
          ? 1
          : dataISoldCount?.fetchUseditemsCountISold
      }
      prefetchitem={prefetchitem}
    />
  );
}
