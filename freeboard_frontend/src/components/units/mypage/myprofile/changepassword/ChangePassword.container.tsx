import ChangePasswordPageUI from "./ChangePassword.presenter";
import { useForm } from "react-hook-form";
import { IChangePasswordFormData } from "./ChangePassword.types";
import { useApolloClient } from "@apollo/client";
import { RESET_USER_PASSWORD } from "./ChangePassword.queries";
import {
  IMutation,
  IMutationResetUserPasswordArgs,
} from "../../../../../commons/types/generated/types";

export default function ChangePasswordPage() {
  const client = useApolloClient();
  const { register, handleSubmit } = useForm<IChangePasswordFormData>({});

  const onClickChangeButton = async (data: IChangePasswordFormData) => {
    await client.mutate<
      Pick<IMutation, "resetUserPassword">,
      IMutationResetUserPasswordArgs
    >({
      mutation: RESET_USER_PASSWORD,
      variables: {
        password: String(data.newPassword),
      },
    });
  };

  return (
    <ChangePasswordPageUI
      register={register}
      handleSubmit={handleSubmit}
      onClickChangeButton={onClickChangeButton}
    />
  );
}
