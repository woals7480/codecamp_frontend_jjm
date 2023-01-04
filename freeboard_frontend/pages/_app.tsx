import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backendonline.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), //나중에 사용
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
