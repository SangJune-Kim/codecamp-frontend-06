import BoardWriteUI from "./BoardWrite.presenter";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";

export default function BoardWrite(props) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const fileRef = useRef(null);

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };
  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickSubmit = async () => {
    if (writer === "" || password === "" || title === "" || contents === "") {
      alert("작성할 곳이 남아있습니다.");
    }
    if (writer !== "" && password !== "" && title !== "" && contents !== "") {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              title: title,
              contents: contents,
              writer: writer,
              password: password,
              images: [imgUrl],
            },
          },
        });
        alert("게시물을 등록하였습니다.");
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert("게시물 등록에 실패하였습니다.");
      }
    }
  };

  const onClickEdit = async () => {
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    const updateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    try {
      await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: password,
          updateBoardInput: updateBoardInput,
        },
      });

      alert("수정되었습니다.");
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      alert("수정이 불가능합니다.");
    }
  };

  const onClickCancel = () => {
    router.push(`/boards`);
  };

  const onChangeFile = async (event) => {
    const file = event.target.files?.[0];
    try {
      const resultFile = await uploadFile({ variables: { file } });
      console.log(resultFile);
      setImgUrl(resultFile.data?.uploadFile.url);
    } catch (error) {
      alert("이미지가 업로드되지 않았습니다.");
    }
  };

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  return (
    <BoardWriteUI
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      onClickCancel={onClickCancel}
      onChangeFile={onChangeFile}
      onClickUpload={onClickUpload}
      title={title}
      contents={contents}
      writer={writer}
      password={password}
      isEdit={props.isEdit}
      data={props.data}
      fileRef={fileRef}
    />
  );
}
