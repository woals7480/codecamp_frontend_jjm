import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  const [deleteBoard] = useMutation(DELETE_BOARD);

  console.log(router);
  const onClickMoveToBoardList = () => {
    router.push("/boards");
  };

  const onClickMoveToBoardEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickDeleteBoard = async () => {
    let isDelete = confirm("정말로 삭제하시겠습니까?");
    if (isDelete) {
      await deleteBoard({
        variables: {
          boardId: data.fetchBoard._id,
        },
      });
      alert("삭제되었습니다!!");
      router.push("/boards");
    }
  };
  return (
    <BoardDetailUI
      data={data}
      onClickDeleteBoard={onClickDeleteBoard}
      onClickMoveToBoardList={onClickMoveToBoardList}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
    />
  );
}
