import { useMutation } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { CREATE_BOARDCOMMENT } from "./BoardCommentWrite.queries";
import { FETCH_BOARDCOMMENTS } from "../list/BoardCommentList.querie";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";

export default function BoardCommentWrite() {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARDCOMMENT);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickWrite = async () => {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating,
          },
          boardId: String(router.query.boardId),
        },
        refetchQueries: [
          {
            query: FETCH_BOARDCOMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      Modal.success({ content: "댓글이 등록되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }

    setWriter("");
    setPassword("");
    setContents("");
    setRating(0);
  };

  return (
    <BoardCommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickWrite={onClickWrite}
      setRating={setRating}
      contents={contents}
      writer={writer}
      password={password}
      rating={rating}
    />
  );
}
