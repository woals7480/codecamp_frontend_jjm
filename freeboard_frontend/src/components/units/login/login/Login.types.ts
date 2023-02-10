import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ILoginUIProps {
  onClickJoinButton: () => void;
  onClickLoginButton: (data: IFormData) => void;
  handleSubmit: UseFormHandleSubmit<IFormData>;
  register: UseFormRegister<IFormData>;
  formState: FormState<IFormData>;
}

export interface IFormData {
  email: string;
  password: string;
}
