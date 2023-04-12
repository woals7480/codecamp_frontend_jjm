import { useQuery } from "@apollo/client";
import MyitemsPageUI from "./MyPicked.presenter";

import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  FETCH_USEDITEMS_COUNT_IPICKED,
  FETCH_USEDITEMS_IPICKED,
} from "./MyPicked.queries";

export default function MyPickedPage() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USEDITEMS_IPICKED, {
    variables: {
      search: "",
    },
  });

  const { data: dataIPickedCount, refetch: refetchCount } = useQuery<
    Pick<IQuery, "fetchUseditemsCountIPicked">
  >(FETCH_USEDITEMS_COUNT_IPICKED);

  const onClickonBoardDetail = (marketId: string) => () => {
    void router.push(`/markets/${marketId}`);
  };

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };
  console.log(dataIPickedCount?.fetchUseditemsCountIPicked);
  console.log(data?.fetchUseditemsIPicked);

  return (
    <MyitemsPageUI
      data={data}
      onClickonBoardDetail={onClickonBoardDetail}
      refetch={refetch}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword}
      refetchCount={refetchCount}
      count={dataIPickedCount?.fetchUseditemsCountIPicked}
    />
  );
}
