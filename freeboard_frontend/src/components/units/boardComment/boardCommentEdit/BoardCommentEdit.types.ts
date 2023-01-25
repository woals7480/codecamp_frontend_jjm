import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface IBoardCommnetEditProps {
  el: IBoardComment;
}

export interface IBoardCommentEditUIProps {
  el: IBoardComment;
  isEdit: boolean;
  contents: string;
  setRating: Dispatch<SetStateAction<number>>;
  isOpenDeleteModal: boolean;
  onClickDelete: () => void;
  onClickUpdateIcon: () => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickUpdate: () => void;
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickOpenDeleteModal: () => void;
}
