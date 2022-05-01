import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import LoginPageUI from "./Login.presenter";
import { LOGIN_USER } from "./Login.queries";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
  email: yup
    .string()
    .email("사용가능한 이메일 형식이 아닙니다.")
    .required("이메일을 입력해주세요"),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .matches(
      /^(?=.*\d)(?=.*\w)(?=.*[!@#$%^&*_+"|;:'/?.,]).{10,15}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 최소 10글자 이상 15글자 이하 입니다."
    ),
});
export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickMoveRegister = () => {
    router.push("/register/");
  };

  const onClickLogIn = async (data) => {
    try {
      const result = await loginUser({
        variables: {
          email: String(data.email),
          password: String(data.password),
        },
      });
      const myAccessToken = result.data?.loginUser.accessToken;
      setAccessToken(myAccessToken);
      Modal.success({ content: "로그인에 성공했습니다." });
      router.push("/");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      Modal.error({ content: error.message });
    }
  };

  return (
    <LoginPageUI
      onClickMoveRegister={onClickMoveRegister}
      onClickLogIn={onClickLogIn}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
