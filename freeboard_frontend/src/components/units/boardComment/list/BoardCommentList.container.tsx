import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentListUI from "./BoardCommentList.presenter";
import {
  DELETE_BOARDCOMMENT,
  FETCH_BOARDCOMMENTS,
} from "./BoardCommentList.querie";
import { MouseEvent } from "react";

export default function BoardCommentList() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARDCOMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARDCOMMENT);

  const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    const myPassword = prompt("비밀번호를 입력하세요");

    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARDCOMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return <BoardCommentListUI data={data} onClickDelete={onClickDelete} />;
}
