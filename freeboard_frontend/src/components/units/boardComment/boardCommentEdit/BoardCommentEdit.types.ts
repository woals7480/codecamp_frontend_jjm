import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface IBoardCommnetEditProps {
  el: IBoardComment;
}

export interface IBoardCommentEditUIProps {
  el: IBoardComment;
  isEdit: boolean;
  contents: string;
  setRating: Dispatch<SetStateAction<number>>;
  onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
  onClickUpdateIcon: () => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickUpdate: () => void;
}
