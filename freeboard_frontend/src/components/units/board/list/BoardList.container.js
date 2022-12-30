import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS } from "./BoardList.queries";

export default function BoardList() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();

  const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  };

  const onClickonBoardDetail = (event) => {
    router.push(`/boards/${event.target.id}`);
  };
  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickonBoardDetail={onClickonBoardDetail}
    />
  );
}
