// import "../styles/globals.css";
import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/components/commons/apollo";
import Layout from "../src/components/commons/layout";

// /////firebase//////////
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByfE35euQGis04luxDW1687pgeFaQYTU0",
  authDomain: "codecamp-jjm.firebaseapp.com",
  projectId: "codecamp-jjm",
  storageBucket: "codecamp-jjm.appspot.com",
  messagingSenderId: "906893893347",
  appId: "1:906893893347:web:0df248731af938a7402fd6",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <ApolloSetting>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </>
  );
}
