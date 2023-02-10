import { ChangeEvent } from "react";

export interface IJoinUIProps {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeConfirm: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickJoinButton: () => void;
  confirmError: string;
}
