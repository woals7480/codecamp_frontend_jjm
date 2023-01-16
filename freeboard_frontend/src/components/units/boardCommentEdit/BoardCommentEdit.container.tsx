import BoardCommentEditUI from "./BoardCommentEdit.presenter";
import { IBoardCommnetEditProps } from "./BoardCommentEdit.types";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../commons/types/generated/types";
import {
  DELETE_BOARDCOMMENT,
  UPDATE_BOARDCOMMENT,
} from "./BoardCommentEdit.queried";
import { FETCH_BOARDCOMMENTS } from "../boardComment/list/BoardCommentList.querie";

export default function BoardCommentEdit(props: IBoardCommnetEditProps) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [password, setPassword] = useState("");
  const [rating, setRating] = useState(props.el.rating);
  const [contents, setContents] = useState(props.el.contents);

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARDCOMMENT);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARDCOMMENT);

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickUpdateIcon = () => {
    setIsEdit((prev) => !prev);
  };

  const onClickUpdate = async () => {
    try {
      await updateBoardComment({
        variables: {
          boardCommentId: props.el._id,
          password,
          updateBoardCommentInput: {
            rating,
            contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARDCOMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      Modal.success({ content: "댓글이 수정되었습니다." });
      setIsEdit((prev) => !prev);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    const myPassword = prompt("비밀번호를 입력하세요");

    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARDCOMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      Modal.success({ content: "댓글이 삭제되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <BoardCommentEditUI
      el={props.el}
      isEdit={isEdit}
      setRating={setRating}
      onClickDelete={onClickDelete}
      onClickUpdateIcon={onClickUpdateIcon}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickUpdate={onClickUpdate}
    />
  );
}
