import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import LoginPageUI from "./Login.presenter";
import { LOGIN_USER } from "./Login.queries";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);

  const [loginChangeInputs, setLoginChangeInputs] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (id) => (event) => {
    setLoginChangeInputs({
      ...loginChangeInputs,
      [id]: event.target.value,
    });
  };

  const onClickMoveRegister = () => {
    router.push("/register/");
  };

  const onClickLogIn = async () => {
    try {
      const result = await loginUser({
        variables: {
          ...loginChangeInputs,
        },
      });
      console.log(result);
      const myAccessToken = result.data?.loginUser.accessToken;
      setAccessToken(myAccessToken);
      localStorage.setItem("accessToken", myAccessToken);
      Modal.success({ content: "로그인에 성공했습니다." });
      router.push("/home");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <LoginPageUI
      onClickMoveRegister={onClickMoveRegister}
      onChangeInput={onChangeInput}
      onClickLogIn={onClickLogIn}
    />
  );
}
