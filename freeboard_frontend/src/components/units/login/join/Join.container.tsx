import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";
import JoinUI from "./Join.presenter";
import { CREATE_USER } from "./Join.quries";
import { IJoinFormData } from "./Join.types";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식에 알맞지 않습니다.")
    .required("이메일을 입력해주세요."),
  password: yup
    .string()
    .matches(
      /^[0-9a-zA-z!@#$%^&*()]{4,12}$/,
      "비밀번호는 숫자, 문자 ,특수문자를 포함한 4자이상 12자이내로 입력하여 주세요."
    )
    .required("비밀번호를 입력해주세요."),
  confirm: yup
    .string()
    .matches(
      /^[0-9a-zA-z!@#$%^&*()]{4,12}$/,
      "비밀번호는 숫자, 문자 ,특수문자를 포함한 4자이상 12자이내로 입력하여 주세요."
    )
    .required("비밀번호확인을 해주세요."),
  name: yup.string().required("이름을 입력해주세요."),
});

export default function Join() {
  const [confirmError, setConfirmError] = useState("");

  const { register, handleSubmit, formState } = useForm<IJoinFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const router = useRouter();

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onClickJoinButton = async (data: IJoinFormData) => {
    const email = data.email;
    const password = data.password;
    const confirm = data.confirm;
    const name = data.name;

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
        Modal.success({ content: "회원가입이 완료되었습니다." });
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    }
  };
  return (
    <JoinUI
      onClickJoinButton={onClickJoinButton}
      confirmError={confirmError}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
