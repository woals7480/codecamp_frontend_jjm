import { UseFormRegister, UseFormHandleSubmit } from "react-hook-form";

export interface IChangePasswordPageUIProps {
  register: UseFormRegister<IChangePasswordFormData>;
  handleSubmit: UseFormHandleSubmit<IChangePasswordFormData>;
  onClickChangeButton: (data: IChangePasswordFormData) => void;
}

export interface IChangePasswordFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
