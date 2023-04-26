import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { restoreAccessTokenLoadable } from "../../../commons/store";
import { useRecoilValueLoadable } from "recoil";

export function useAuth() {
  const router = useRouter();
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    void aaa.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        Modal.error({ content: "로그인 후 이용가능합니다." });
        void router.push("/login");
      }
    });
  }, []);
}
