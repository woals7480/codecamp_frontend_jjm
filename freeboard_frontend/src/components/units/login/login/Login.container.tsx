import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { accessTokenState } from "../../../../commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import LoginUI from "./Login.presenter";
import { LOGIN_USER } from "./Login.quries";
import { useRecoilState } from "recoil";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IFormData } from "./Login.types";

const schema = yup.object({
  password: yup
    .string()
    .matches(
      /^[0-9a-zA-z!@#$%^&*()]{4,12}$/,
      "비밀번호는 숫자, 문자 ,특수문자를 포함한 4자이상 12자이내로 입력하여 주세요."
    )
    .required("비밀번호를 입력해주세요."),
  email: yup
    .string()
    .email("이메일 형식에 적합하지 않습니다.")
    .required("이메일을 입력해주세요."),
});

export default function Login() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickLoginButton = async (data: IFormData) => {
    const email = data.email;
    const password = data.password;

    try {
      const result = await loginUser({ variables: { email, password } });
      const accessToken = result.data?.loginUser.accessToken;
      if (!accessToken) {
        Modal.error({ content: "로그인에 실패하셨습니다. 다시 시도해주세요." });
        return;
      }
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      void router.push("/boards");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickJoinButton = () => {
    void router.push("/join");
  };

  return (
    <LoginUI
      onClickLoginButton={onClickLoginButton}
      onClickJoinButton={onClickJoinButton}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
    />
  );
}
