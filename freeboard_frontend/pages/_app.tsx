import "../styles/globals.css";
import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { Global } from "@emotion/react";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { AppProps } from "next/app";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUploadLink } from "apollo-upload-client";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZDb4PslwosZZgpnggYfMxMSCN58HQtMM",
  authDomain: "freeboard-a18f5.firebaseapp.com",
  projectId: "freeboard-a18f5",
  storageBucket: "freeboard-a18f5.appspot.com",
  messagingSenderId: "441621947813",
  appId: "1:441621947813:web:dccf568bde3f633969f44c",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
  });

  // 모든 세팅
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
