import BoardWriteUI from "./BoardWrite.presenter";
import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

const BoardWrite = (props) => {
  const [writer, setWriter] = useState("");
  const [writerError, setWriterError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contents, setContents] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");

  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value === "") {
      setWriterError("작성자를 작성하세요.");
    } else {
      setWriterError("");
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value === "") {
      setPasswordError("비밀번호를 입력하세요.");
    } else {
      setPasswordError("");
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value === "") {
      setTitleError("제목을 작성하세요.");
    } else {
      setTitleError("");
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value === "") {
      setContentsError("내용을 작성하세요.");
    } else {
      setContentsError("");
    }
  };

  const onClickPostCode = (address) => {
    setIsOpen((prev) => !prev);
    setAddress(address.address);
    setZipcode(address.zonecode);
  };

  const handleRegister = async () => {
    if (writer === "") {
      setWriterError("작성자를 입력하세요.");
    } else {
      setWriterError("");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력하세요.");
    } else {
      setPasswordError("");
    }
    if (title === "") {
      setTitleError("제목을 입력하세요.");
    } else {
      setTitleError("");
    }
    if (contents === "") {
      setContentsError("내용을 입력하세요.");
    } else {
      setContentsError("");
    }
    if (
      writer === "" ||
      password === "" ||
      title === "" ||
      contents === "" ||
      address === "" ||
      zipcode === ""
    ) {
      alert("작성할 곳이 남아있습니다.");
    }
    if (
      writer !== "" &&
      password !== "" &&
      title !== "" &&
      contents !== "" &&
      address !== "" &&
      zipcode !== ""
    ) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: title,
              contents: contents,
            },
          },
        });
        alert("가입이 완료되었습니다.");
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  // 수정하기 버튼 부분
  const handleEdit = async () => {
    if (!writer && !contents) {
      alert("수정한 내용이 없습니다.");
      return;
    }
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    const updateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    // 한 줄 짜리 if는 중괄호 생략 가능
    // if(title) === if(title !== "") 같은 의미 왜냐하면 문자열에 어떤거라도 있으면 true 라서

    try {
      await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: password,
          updateBoardInput: updateBoardInput,
        },
      });
      alert("게시물이 수정되었습니다.");
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      handleRegister={handleRegister}
      handleEdit={handleEdit}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      isEdit={props.isEdit}
      data={props.data}
      onClickPostCode={onClickPostCode}
      isOpen={isOpen}
      address={address}
      zipcode={zipcode}
    />
  );
};
export default BoardWrite;
