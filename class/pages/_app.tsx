import "antd/dist/antd.css";
// import "../styles/globals.css";

import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import ApolloSetting from "../src/components/commons/apollo";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6vGRhC9uVP7ysdETinxEFqQ3AsvTcutA",
  authDomain: "firstsite-18025.firebaseapp.com",
  projectId: "firstsite-18025",
  storageBucket: "firstsite-18025.appspot.com",
  messagingSenderId: "290087205070",
  appId: "1:290087205070:web:9ddb6946ad4ce046af789f",
  measurementId: "G-3CS1BTLYW4",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function MyApp({ Component, pageProps }: AppProps) {
  // 모든 세팅

  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
