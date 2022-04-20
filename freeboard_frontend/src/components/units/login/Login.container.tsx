// import { useMutation } from "@apollo/client";
// import { Modal } from "antd";
// import { useRouter } from "next/router";
// import { useState } from "react";
import LoginPageUI from "./Login.presenter";
// import { LOGIN_USER } from "./Login.queries";

export default function LoginPage() {
  // const router = useRouter();
  // const [loginUser] = useMutation(LOGIN_USER);

  // const [loginChangeInputs, setLoginChangeInputs] = useState({
  //   email: "",
  //   password: "",
  // });

  // const onChangeInput = (id) => (event) => {
  //   setLoginChangeInputs({
  //     ...loginChangeInputs,
  //     [id]: event.target.value,
  //   });
  // };

  // const onClickMoveRegister = () => {
  //   router.push("/register/");
  // };

  // const onClickRegister = async () => {
  //   try {
  //     const successToken = await loginUser({
  //       variables: {
  //         ...loginChangeInputs,
  //       },
  //     });

  //     Modal.success({ content: "로그인에 성공했습니다." });
  //     router.push("/home");
  //   } catch (error) {
  //     if (error instanceof Error) Modal.error({ content: error.message });
  //   }
  // };

  return (
    <LoginPageUI
    // onClickMoveRegister={onClickMoveRegister}
    // onChangeInput={onChangeInput}
    // // onClickRegister={onClickRegister}
    />
  );
}
