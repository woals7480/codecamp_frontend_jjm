import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // 1. 프리렌더링 예제 - process.broswer 방법
  if (process.browser) {
    // console.log("지금은 브라우저!");
    // const result = localStorage.getItem("accessToken");
    // if (result) setAccessToken(result);
  } else {
    // console.log("지금은 프론트엔드 서버!(yarn dev로 실행시킨 프로그램 내부!)");
    // const result = localStorage.getItem("accessToken");
    // if (result) setAccessToken(result);
  }

  // 2. 프리렌더링 예제 - typeof window 방법
  if (typeof window !== "undefined") {
    // console.log("지금은 브라우저!");
    // const result = localStorage.getItem("accessToken");
    // if (result) setAccessToken(result);
  } else {
    // console.log("지금은 프론트엔드 서버!(yarn dev로 실행시킨 프로그램 내부!)");
    // const result = localStorage.getItem("accessToken");
    // if (result) setAccessToken(result);
  }

  // 3. 프리렌더링 무시 - useEffect 방법
  useEffect(() => {
    console.log("지금은 브라우저!");
    const result = localStorage.getItem("accessToken");
    if (result) setAccessToken(result);
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backendonline.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    // cache: new InMemoryCache(), // 나중에 사용
    cache: GLOBAL_STATE, // 페이지 전환(_app.tsx 리렌더)되어도, 캐시 유지
  });

  // prettier-ignore
  return (
    <ApolloProvider client={client}>
        {props.children}
    </ApolloProvider>
  );
}
