import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import RegisterUI from "./Register.presenter";
import { CREATE_USER } from "./Register.queries";
import { Modal } from "antd";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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
  name: yup.string().required("이름을 입력해주세요"),
});

export default function Register() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickRegister = async (data) => {
    try {
      await createUser({
        variables: {
          createUserInput: data,
        },
      });
      Modal.success({ content: "회원가입이 완료되었습니다." });
      router.push("/login/");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickMoveLogin = () => {
    router.push("/login");
  };
  return (
    <RegisterUI
      onClickRegister={onClickRegister}
      onClickMoveLogin={onClickMoveLogin}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
