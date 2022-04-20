import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import RegisterUI from "./Register.Presenter";
import { CREATE_USER } from "./Register.queries";

export default function Register() {
  const router = useRouter();
  const onClickMoveLogin = () => {
    router.push("/login");
  };
  const [createUser] = useMutation(CREATE_USER);

  const [changeInputs, setChangeInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const onChangeInput = (id) => (event) => {
    setChangeInputs({
      ...changeInputs,
      [id]: event.target.value,
    });
  };

  const onClickRegister = async () => {
    if (
      changeInputs.email === "" ||
      changeInputs.name === "" ||
      changeInputs.password === ""
    ) {
      Modal.error({ content: "작성할 곳이 남았습니다." });
    }
    if (
      changeInputs.email !== "" &&
      changeInputs.name !== "" &&
      changeInputs.password !== ""
    ) {
      try {
        await createUser({
          variables: {
            createUserInput: { ...changeInputs },
          },
        });
        Modal.success({ content: "회원가입이 완료되었습니다." });
        router.push("/login/");
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    }
  };

  return (
    <RegisterUI
      onClickMoveLogin={onClickMoveLogin}
      onChangeInput={onChangeInput}
      changeInputs={changeInputs}
      onClickRegister={onClickRegister}
    />
  );
}
