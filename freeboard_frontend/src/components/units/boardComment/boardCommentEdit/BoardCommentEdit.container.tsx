import BoardCommentEditUI from "./BoardCommentEdit.presenter";
import { IBoardCommnetEditProps } from "./BoardCommentEdit.types";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import {
  DELETE_BOARDCOMMENT,
  UPDATE_BOARDCOMMENT,
} from "./BoardCommentEdit.queried";

export default function BoardCommentEdit(props: IBoardCommnetEditProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [password, setPassword] = useState("");
  const [rating, setRating] = useState(props.el.rating);
  const [contents, setContents] = useState(props.el.contents);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [myPassword, setMyPassword] = useState("");

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
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchBoardComments: (prev, { readField }) => {
                const updatedId = data?.updateBoardComment;
                const filteredPrev = prev.filter(
                  (el: any) => readField("_id", el) !== updatedId
                );
                return [...filteredPrev, data?.updateBoardComment];
              },
            },
          });
        },
      });
      Modal.success({ content: "댓글이 수정되었습니다." });
      setIsEdit((prev) => !prev);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickDelete = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: props.el._id,
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchBoardComments: (prev, { readField }) => {
                const deletedId = data?.deleteBoardComment;
                const filteredPrev = prev.filter(
                  (el: any) => readField("_id", el) !== deletedId
                );
                return [...filteredPrev];
              },
            },
          });
        },
      });
      Modal.success({ content: "댓글이 삭제되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickOpenDeleteModal = () => {
    setIsOpenDeleteModal(true);
  };

  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };

  return (
    <BoardCommentEditUI
      el={props.el}
      isEdit={isEdit}
      setRating={setRating}
      contents={contents}
      onClickDelete={onClickDelete}
      isOpenDeleteModal={isOpenDeleteModal}
      onChangeDeletePassword={onChangeDeletePassword}
      onClickOpenDeleteModal={onClickOpenDeleteModal}
      onClickUpdateIcon={onClickUpdateIcon}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickUpdate={onClickUpdate}
    />
  );
}
