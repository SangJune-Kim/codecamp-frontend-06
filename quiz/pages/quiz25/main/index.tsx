import { Modal, Button } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";

export default function QuizMainPage() {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
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
      Modal.error({ content: "작성할 곳이 남아있습니다." });
    if (inputs.id !== "" && inputs.password !== "") {
      const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
      baskets.length >= 1
        ? setIsModalVisible(true)
        : Modal.success({ content: "로그인에 성공하였습니다." }) &&
          router.push("/quiz25/boards");
    }
  };

  const handleOk = () => {
    router.push("/quiz25/basket/");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    router.push("/quiz25/boards");
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
        <Modal
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={[
            <Button key={"submit"} onClick={handleOk} type="primary">
              이동하기
            </Button>,
            <Button key={"moveList"} onClick={handleCancel} type="primary">
              목록으로
            </Button>,
          ]}
        >
          비회원으로 담긴 게시물 장바구니가 존재합니다. 이동하시겠습니까?
        </Modal>
      </div>
    </>
  );
}
