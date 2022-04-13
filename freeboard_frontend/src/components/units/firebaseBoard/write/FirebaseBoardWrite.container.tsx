import { ChangeEvent, useState } from "react";
import { firebaseApp } from "../../../../../pages/_app";
import FireBaseBoardWriteUI from "./FirebaseBoardWrite.presenter";
import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { useRouter } from "next/router";

export default function FireBaseBoardWrite() {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");
  // const [isOpen, setIsOpen] = useState(false);
  // const [address, setAddress] = useState("");
  // const [zipcode, setZipcode] = useState("");

  const board = collection(getFirestore(firebaseApp), "board");

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value === "") {
      setWriterError("작성자를 작성하세요.");
    } else {
      setWriterError("");
    }
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value === "") {
      setPasswordError("비밀번호를 입력하세요.");
    } else {
      setPasswordError("");
    }
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value === "") {
      setTitleError("제목을 작성하세요.");
    } else {
      setTitleError("");
    }
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
    if (event.target.value === "") {
      setContentsError("내용을 작성하세요.");
    } else {
      setContentsError("");
    }
  };

  // const onClickModal = () => {
  //   setIsOpen((prev) => !prev);
  // };

  // const onClickPostCode = (address: Address) => {
  //   setIsOpen((prev) => !prev);
  //   setAddress(address.address);
  //   setZipcode(address.zonecode);
  // };

  const handleRegister = async () => {
    try {
      await addDoc(board, {
        writer,
        password,
        title,
        contents,
      });
      alert("등록되었습니다.");
      // const result = getDocs(board);
      // console.log(result);
      // router.push("/firebaseBoards/");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <FireBaseBoardWriteUI
      writer={writer}
      password={password}
      title={title}
      contents={contents}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      handleRegister={handleRegister}
      // onClickModal={onClickModal}
      // isOpen={isOpen}
      // address={address}
      // zipcode={zipcode}
    />
  );
}
