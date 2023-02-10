import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { accessTokenState } from "../../../../commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import LoginUI from "./Login.presenter";
import { LOGIN_USER } from "./Login.quries";
import { useRecoilState } from "recoil";
import { Modal } from "antd";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onClickLoginButton = async () => {
    try {
      const result = await loginUser({ variables: { email, password } });
      const accessToken = result.data?.loginUser.accessToken;

      if (!accessToken) {
        Modal.error({ content: "로그인에 실패하셨습니다. 다시 시도해주세요." });
        return;
      }
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);

      router.back();
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickJoinButton = () => {
    void router.push("/join");
  };

  return (
    <LoginUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLoginButton={onClickLoginButton}
      onClickJoinButton={onClickJoinButton}
    />
  );
}
