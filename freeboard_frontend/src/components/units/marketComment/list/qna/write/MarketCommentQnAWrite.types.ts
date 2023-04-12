import { ChangeEvent } from "react";
import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form/dist/types";

export interface IFormData {
  contents: string;
}

export interface IMarketCommentQnAProps {
  commentId: string;
  isQnA: boolean;
}

export interface IMarketCommentQnAUIProps {
  onClickSubmit: (data: IFormData) => void;
  register: UseFormRegister<IFormData>;
  handleSubmit: UseFormHandleSubmit<IFormData>;
  formState: FormState<IFormData>;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  contentsLength: number;
  isQnA: boolean;
}
