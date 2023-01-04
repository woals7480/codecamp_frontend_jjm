import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS } from "./BoardList.queries";
import { MouseEvent } from "react";

export default function BoardList() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();

  const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  };

  const onClickonBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };
  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickonBoardDetail={onClickonBoardDetail}
    />
  );
}
