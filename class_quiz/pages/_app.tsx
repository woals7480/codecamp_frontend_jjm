import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import ApolloSettings from "../src/components/commons/apollo";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../styles/globalStyles";

export default function App({ Component }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSettings>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component />
          </Layout>
        </>
      </ApolloSettings>
    </RecoilRoot>
  );
}
