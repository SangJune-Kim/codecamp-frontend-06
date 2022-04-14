// apollo 설정자리
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

export default function ApolloSetting(props: any) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);

  // if (typeof window !== "undefined") {
  //   console.log("여기는 브라우저다!!");
  //   // const myLocalstorageAccessToken = localStorage.getItem("accessToken");
  //   // setAccessToken(myLocalstorageAccessToken || "");
  // } else {
  //   console.log("여기는 프론트엔드 서버다!!, yarn dev다");
  // }

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    setAccessToken(accessToken || "");
    setUserInfo(userInfo || "");
  }, []);

  // const myLocalstorageAccessToken = localStorage.getItem("accessToken");
  // setAccessToken(myLocalstorageAccessToken || "");

  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
