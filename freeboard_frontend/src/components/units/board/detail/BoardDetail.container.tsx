import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import { Modal } from "antd";

export default function BoardDetail() {
  const router = useRouter();
  const { data: dataFetchBoard } = useQuery<
    Pick<IQuery, "fetchBoard">,
    IQueryFetchBoardArgs
  >(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const onClickDeleteBoard = () => {
    Modal.confirm({
      content: "정말로 삭제하시겠습니까?",
      async onOk() {
        try {
          await deleteBoard({
            variables: {
              boardId: dataFetchBoard?.fetchBoard._id ?? "",
            },
          });
          Modal.success({ content: "삭제되었습니다!!" });
          void router.push("/boards");
        } catch (error) {
          if (error instanceof Error) Modal.error({ content: error.message });
        }
      },
    });
  };

  const onClickLike = async () => {
    if (typeof router.query.boardId !== "string") return;
    await likeBoard({
      variables: { boardId: router.query.boardId },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          data: {
            fetchBoard: {
              ...dataFetchBoard?.fetchBoard,
              likeCount: data?.likeBoard,
            },
          },
        });
      },
    });
  };

  const onClickDisLike = async () => {
    if (typeof router.query.boardId !== "string") return;
    await dislikeBoard({
      variables: { boardId: router.query.boardId },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          data: {
            fetchBoard: {
              ...dataFetchBoard?.fetchBoard,
              dislikeCount: data?.dislikeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <BoardDetailUI
      data={dataFetchBoard}
      onClickDeleteBoard={onClickDeleteBoard}
      onClickLike={onClickLike}
      onClickDisLike={onClickDisLike}
    />
  );
}
