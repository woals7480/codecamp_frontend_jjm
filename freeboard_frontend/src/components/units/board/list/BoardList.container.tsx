import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const router = useRouter();

  const onClickMoveToBoardNew = () => {
    void router.push("/boards/new");
  };

  const onClickonBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(`/boards/${event.currentTarget.id}`);
  };
  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickonBoardDetail={onClickonBoardDetail}
      refetch={refetch}
      count={dataBoardsCount?.fetchBoardsCount}
    />
  );
}
