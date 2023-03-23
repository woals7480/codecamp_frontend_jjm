import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  fromPromise,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { getUserInfo } from "../../../commons/libraries/getUserInfo";

interface IApolloSettingProps {
  children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const setUserInfo = useSetRecoilState(userInfoState);

  useEffect(() => {
    void getAccessToken().then((newAccessToken) => {
      if (newAccessToken === undefined) return;
      setAccessToken(newAccessToken);

      void getUserInfo(newAccessToken).then((userInfo) => {
        if (userInfo === undefined) return;
        setUserInfo(JSON.parse(userInfo));
      });
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            getAccessToken().then((newAccessToken) => {
              if (newAccessToken === undefined) return;
              setAccessToken(newAccessToken);

              if (typeof newAccessToken !== "string") return;
              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken}`,
                },
              });
            })
          ).flatMap(() => forward(operation));
        } else if (err.extensions.code === "INTERNAL_SERVER_ERROR") {
          return;
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    credentials: "include",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE,
  });

  // prettier-ignore
  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  );
}
