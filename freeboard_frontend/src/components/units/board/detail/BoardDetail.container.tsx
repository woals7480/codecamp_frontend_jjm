import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const onClickMoveToBoardList = () => {
    router.push("/boards");
  };

  const onClickMoveToBoardEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickDeleteBoard = async () => {
    const isDelete = confirm("정말로 삭제하시겠습니까?");
    try {
      if (isDelete) {
        await deleteBoard({
          variables: {
            boardId: String(data?.fetchBoard._id),
          },
        });
        alert("삭제되었습니다!!");
        router.push("/boards");
      }
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
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
