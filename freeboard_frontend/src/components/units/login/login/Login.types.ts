import { ChangeEvent } from "react";

export interface ILoginUIProps {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLoginButton: () => void;
  onClickJoinButton: () => void;
}
