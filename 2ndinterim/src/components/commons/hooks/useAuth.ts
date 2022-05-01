import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/store";

const useAuth = () => {
  const [accessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    if (!accessToken) {
      restoreAccessToken.toPromise().then((newAccessToken) => {
        console.log("엘렐레" + newAccessToken);
        if (!newAccessToken) {
          alert("로그인을 먼저 해야합니다!!");
          router.push("/login");
        }
      });
    }
  }, []);
};
export default useAuth;
