import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../src/commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../src/commons/types/generated/types";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function PaymentLoginPage() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      if (!accessToken) {
        Modal.error({ content: "로그인에 실패하셨습니다. 다시 시도해주세요." });
        return;
      }
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);

      void router.push("/18/payment/loading");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      이메일 : <input type="text" {...register("email")} />
      비밀번호 : <input type="password" {...register("password")} />
      <button>로그인하기</button>
    </form>
  );
}
