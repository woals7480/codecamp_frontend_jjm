import {
  UseFormRegister,
  UseFormHandleSubmit,
  FormState,
} from "react-hook-form";

export interface IFormData {
  name: string;
  remarks: string;
  contents: string;
  price: number;
}

export interface IMarketWriteUIProps {
  onClickSubmit: (data: IFormData) => void;
  register: UseFormRegister<IFormData>;
  handleSubmit: UseFormHandleSubmit<IFormData>;
  formState: FormState<IFormData>;
}
