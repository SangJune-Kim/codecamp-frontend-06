import BoardWriteUI from "./BoardWrite.presenter";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { Modal } from "antd";
import { IBoardWriteProps } from "./BoardWrite.types";
import { IUpdateBoardInput } from "../../../../commons/types/generated/types";
import { Address } from "react-daum-postcode";

const BoardWrite = (props: IBoardWriteProps) => {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [inputs, setInput] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const [inputsError, setInputsError] = useState({
    writerError: "",
    passwordError: "",
    titleError: "",
    contentsError: "",
  });

  const onChangeInput = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const newInputs = {
      ...inputs,
      [event.target.id]: event.target.value,
    };
    setInput(newInputs);
    if (event.target.value)
      setInputsError((prev) => ({ ...prev, [event.target.id]: "" }));
    const isActive = Object.values(newInputs).every((el) => el);
    setIsActive(isActive);
  };

  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };

  const onClickPostCode = (address: Address) => {
    setIsOpen((prev) => !prev);
    setAddress(address.address);
    setZipcode(address.zonecode);
  };

  const handleRegister = async () => {
    setInputsError({
      writer: inputs.writer ? "" : "작성자를 입력해주세요.",
      password: inputs.password ? "" : "비밀번호를 입력해주세요.",
      title: inputs.title ? "" : "제목을 입력해주세요.",
      contents: inputs.contents ? "" : "내용을 입력해주세요.",
    });
    if (isActive) {
      Modal.error({ content: "작성할 곳이 남아있습니다." });
    }
    if (isActive) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              ...inputs,
              youtubeUrl: youtubeUrl,
              boardAddress: {
                zipcode: zipcode,
                address: address,
              },
            },
          },
        });
        Modal.success({ content: "가입이 완료되었습니다." });
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    }
  };

  // 수정하기 버튼 부분
  const handleEdit = async () => {
    if (!inputs.password) {
      Modal.error({ content: "비밀번호를 입력해주세요." });
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if (inputs.title) updateBoardInput.title = inputs.title;
    if (inputs.contents) updateBoardInput.contents = inputs.contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode || address) {
      updateBoardInput.boardAddress = {};
      if (address) updateBoardInput.boardAddress.address = address;
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
    }
    // 한 줄 짜리 if는 중괄호 생략 가능
    // if(title) === if(title !== "") 같은 의미 왜냐하면 문자열에 어떤거라도 있으면 true 라서
    try {
      await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: inputs.password,
          updateBoardInput: updateBoardInput,
        },
      });
      Modal.success({ content: "게시물이 수정되었습니다." });
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <BoardWriteUI
      onChangeInput={onChangeInput}
      inputsError={inputsError}
      handleRegister={handleRegister}
      handleEdit={handleEdit}
      isEdit={props.isEdit}
      data={props.data}
      onClickPostCode={onClickPostCode}
      isOpen={isOpen}
      address={address}
      zipcode={zipcode}
      youtubeUrl={youtubeUrl}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
    />
  );
};
export default BoardWrite;
