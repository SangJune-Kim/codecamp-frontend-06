// apollo 설정자리
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

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
    // 예전 방식
    // const accessToken = localStorage.getItem("accessToken");
    // const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    // setAccessToken(accessToken || "");
    // setUserInfo(userInfo || "");

    // accessToken 재발급 받아서 state에 넣어주기
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  // const myLocalstorageAccessToken = localStorage.getItem("accessToken");
  // setAccessToken(myLocalstorageAccessToken || "");

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2-1. refreshToken으로 accessToken을 재발급 받기
          getAccessToken().then((newAccessToken) => {
            // 2-2. 재발급 받은 accessToken 저장하기
            setAccessToken(newAccessToken);

            // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${accessToken}`, // accessToken만 바꿔
              },
            });

            // 3-2. 변경된 operation 재요청하기
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
