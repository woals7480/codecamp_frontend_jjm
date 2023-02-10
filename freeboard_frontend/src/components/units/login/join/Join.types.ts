import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IJoinFormData {
  email: string;
  name: string;
  password: string;
  confirm: string;
}

export interface IJoinUIProps {
  onClickJoinButton: (data: IJoinFormData) => void;
  confirmError: string;
  register: UseFormRegister<IJoinFormData>;
  handleSubmit: UseFormHandleSubmit<IJoinFormData>;
  formState: FormState<IJoinFormData>;
}
