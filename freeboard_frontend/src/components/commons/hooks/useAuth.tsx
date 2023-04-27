import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

export function useAuth() {
  const router = useRouter();

  useEffect(() => {
    void getAccessToken().then((newAccessToken) => {
      if (!newAccessToken) {
        Modal.error({ content: "로그인 후 이용가능합니다." });
        void router.push("/login");
      }
    });
  }, []);
}
