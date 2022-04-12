import "antd/dist/antd.css";
// import "~slick-carousel/slick/slick.css";
// import "../styles/globals.css";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import ApolloProviderComponent from "../src/components/commons/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  // 모든 세팅

  return (
    <RecoilRoot>
      <ApolloProviderComponent>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProviderComponent>
    </RecoilRoot>
  );
}

export default MyApp;
