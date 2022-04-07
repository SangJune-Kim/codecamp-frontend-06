// import axios from "axios";
import { ChangeEvent, useRef, useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { checkFileValidation } from "../../src/commons/libraries/validation";
import { Modal } from "antd";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
export default function GraphqlMutationPage() {
  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD);

  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const fileRef = useRef<HTMLInputElement>(null);

  const [imageUrl, setImageUrl] = useState<string | undefined>("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const callGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1"); //rest-api 방식
    const result = await callApi({
      variables: {
        createBoardInput: {
          writer: myWriter,
          title: myTitle,
          contents: myContents,
          password: myPassword,
          images: [imageUrl],
        },
      },
    }); // graphql-api 방식
    console.log(result);
    console.log(result.data.createBoard.message);
    setData(result.data.createBoard.message);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setMyWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setMyTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setMyContents(event.target.value);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    const isValid = checkFileValidation(file);

    if (!isValid) return;

    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result.data?.uploadFile.url);
      setImageUrl(result.data?.uploadFile.url);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <>
      <div>{data}</div>
      작성자: <input type="text" onChange={onChangeWriter} />
      <br />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContents} />
      <br />
      <div>
        <div>이미지 업로드 연습하기</div>
        <div
          style={{
            width: "150px",
            height: "150px",
            backgroundColor: "gray",
            cursor: "pointer",
          }}
          onClick={onClickImage}
        >
          이미지선택
        </div>

        <input
          style={{ display: "none" }}
          type="file"
          onChange={onChangeFile}
          ref={fileRef}
        />
        <img src={`https://storage.googleapis.com/${imageUrl}`} />
      </div>
      <button onClick={callGraphqlApi}>GraphQL-API 요청하기!!!</button>
    </>
  );
}
