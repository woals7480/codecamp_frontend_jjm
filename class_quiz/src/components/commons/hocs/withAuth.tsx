import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const WithAuthPage = (Component: any) => (props: any) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      Modal.error({ content: "로그인 후 이용가능합니다." });
      void router.push("/14/hoc/login");
    }
  }, []);

  return <Component {...props} />;
};
