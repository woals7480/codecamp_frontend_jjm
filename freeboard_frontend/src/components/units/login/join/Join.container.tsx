import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";
import JoinUI from "./Join.presenter";
import { CREATE_USER } from "./Join.quries";

export default function Join() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const router = useRouter();

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeConfirm = (event: ChangeEvent<HTMLInputElement>) => {
    setConfirm(event.target.value);
  };

  const onClickJoinButton = async () => {
    if (password !== confirm) {
      setConfirmError("비밀번호가 일치하지 않습니다.");
    } else {
      setConfirmError("");
      try {
        await createUser({
          variables: {
            createUserInput: {
              email,
              password,
              name,
            },
          },
        });

        void router.push("/login");
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    }
  };
  return (
    <JoinUI
      onChangeEmail={onChangeEmail}
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onChangeConfirm={onChangeConfirm}
      onClickJoinButton={onClickJoinButton}
      confirmError={confirmError}
    />
  );
}
