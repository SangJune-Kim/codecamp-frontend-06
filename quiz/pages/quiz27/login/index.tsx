import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";

export default function QuizLoginPage() {
  const router = useRouter();

  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });
  const onChangeInput = (el) => (event) => {
    setInputs({
      ...inputs,
      [el]: event.target.value,
    });
  };
  const onClickLogin = () => {
    if (inputs.id === "" || inputs.password === "")
      return Modal.error({ content: "작성할 곳이 남아있습니다." });
    if (inputs.id !== "" && inputs.password !== "") {
      Modal.success({ content: "로그인에 성공하였습니다." });
      router.push("/quiz27/loading/");
    }
  };
  return (
    <>
      <div>
        아이디:
        <input onChange={onChangeInput("id")} />
      </div>
      <div>
        비밀번호:
        <input onChange={onChangeInput("password")} />
        <button onClick={onClickLogin}>로그인</button>
      </div>
    </>
  );
}
