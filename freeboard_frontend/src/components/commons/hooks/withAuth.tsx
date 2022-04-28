import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

export const withAuth = (Component) => (props) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      Modal.error({ content: "로그인이 필요합니다." });
      router.push("/login");
    }
  }, []);
  // if(!accessToken){
  //   getAccessToken().then((newAccessToken)=>{
  //     setAccessToken(newAccessToken)
  //     if(!newAccessToken){
  //       Modal.error({ content: "로그인이 필요합니다." });
  //   router.push("/login");
  //     }
  //   })
  // }

  return <Component {...props} />;
};
