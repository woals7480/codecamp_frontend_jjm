import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

export const WithAuth = (Component: any) => (props: any) => {
  // const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  // const router = useRouter();

  // useEffect(() => {
  //   if (!accessToken) {
  //     Modal.error({ content: "로그인 후 이용가능합니다." });
  //     void router.push("/login");
  //   }
  // }, []);

  return <Component {...props} />;
};
