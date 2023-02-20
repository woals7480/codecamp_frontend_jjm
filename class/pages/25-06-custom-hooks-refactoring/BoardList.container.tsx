import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { useMoveToPage } from "../../src/components/commons/hooks/useMoveToPage";
import { useSearch } from "../../src/components/commons/hooks/useSearch";

export default function BoardList() {
  const { onClickMoveToPage } = useMoveToPage();
  const { keyword, onChangeKeyword } = useSearch();

  // const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  // const router = useRouter();

  // const onClickMoveToBoardNew = () => {
  //   void router.push("/boards/new");
  // };

  // const onClickonBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
  //   void router.push(`/boards/${event.currentTarget.id}`);
  // };

  // const onChangeKeyword = (value: string) => {
  //   setKeyword(value);
  // };
  return (
    <BoardListUI
      data={data}
      // onClickMoveToBoardNew={onClickMoveToBoardNew}
      // onClickonBoardDetail={onClickonBoardDetail}
      onClickMoveToPage={onClickMoveToPage}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword}
      refetch={refetch}
      refetchBoardsCount={refetchBoardsCount}
      count={dataBoardsCount?.fetchBoardsCount}
    />
  );
}
