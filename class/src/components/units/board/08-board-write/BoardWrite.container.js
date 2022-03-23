//container component

import BoardWriteUI from "./BoardWrite.presenter";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD,UPDATE_BOARD} from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const [data, setData] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  const onClickUpdate = async () => {
    await updateBoard({
      variables: {
        number: Number(router.query.mynumber),
        writer: myWriter,
        title: myTitle,
        contents: myContents,
      }
    });
    alert("게시글 수정에 성공하였습니다!");
    router.push(`/08-05-boards/${router.query.mynumber}`);
  };

  const callGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1"); //rest-api 방식
    const result = await createBoard({
      variables: { writer: myWriter, title: myTitle, contents: myContents },
    }); //graphql-api 방식
    // console.log(result);
    // console.log(result.data.createBoard.message)
    // setData(result.data.createBoard.message)
    alert("게시글 등록에 성공하였습니다!");
    router.push(`/08-05-boards/${result.data.createBoard.number}`);
  };

  const onChangeWriter = (event) => {
    setMyWriter(event.target.value);
    if (event.target.value !== "" && myTitle !== "" && myContents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event) => {
    setMyTitle(event.target.value);
    if (myWriter !== "" && event.target.value !== "" && myContents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event) => {
    setMyContents(event.target.value);
    if (myWriter !== "" && myTitle !== "" && event.target.value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <BoardWriteUI
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        callGraphqlApi={callGraphqlApi}
        onClickUpdate={onClickUpdate}
        isActive={isActive}
        isEdit={props.isEdit}
    />
  );
}
