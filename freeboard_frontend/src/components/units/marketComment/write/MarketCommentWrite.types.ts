import { ChangeEvent } from "react";
import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IFormData {
  contents: string;
}

export interface IMarketCommentWriteUIProps {
  onClickSubmit: (data: IFormData) => void;
  register: UseFormRegister<IFormData>;
  handleSubmit: UseFormHandleSubmit<IFormData>;
  formState: FormState<IFormData>;
  onChangeLength: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  contentsLength: number;
}
