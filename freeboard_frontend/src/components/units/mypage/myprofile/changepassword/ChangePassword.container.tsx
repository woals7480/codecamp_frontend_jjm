import ChangePasswordPageUI from "./ChangePassword.presenter";
import { useForm } from "react-hook-form";
import { IChangePasswordFormData } from "./ChangePassword.types";
import { useApolloClient } from "@apollo/client";
import { RESET_USER_PASSWORD } from "./ChangePassword.queries";
import {
  IMutation,
  IMutationResetUserPasswordArgs,
} from "../../../../../commons/types/generated/types";
import { Modal } from "antd";
import { useRouter } from "next/router";

export default function ChangePasswordPage() {
  const client = useApolloClient();
  const { register, handleSubmit } = useForm<IChangePasswordFormData>({
    mode: "onChange",
  });
  const router = useRouter();

  const onClickChangeButton = async (data: IChangePasswordFormData) => {
    try {
      if (data.newPassword === data.confirmPassword) {
        await client.mutate<
          Pick<IMutation, "resetUserPassword">,
          IMutationResetUserPasswordArgs
        >({
          mutation: RESET_USER_PASSWORD,
          variables: { password: String(data.newPassword) },
        });
        Modal.success({ content: "비밀번호 변경에 성공하였습니다." });
        void router.push("/mypages/myprofile");
      } else {
        Modal.error({ content: "새 비밀번호 확인이 맞지 않습니다." });
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <ChangePasswordPageUI
      register={register}
      handleSubmit={handleSubmit}
      onClickChangeButton={onClickChangeButton}
    />
  );
}
