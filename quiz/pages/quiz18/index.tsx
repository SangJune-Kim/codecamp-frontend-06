import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { ChangeEvent, useRef, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

import { LikeOutlined } from "@ant-design/icons";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const UploadImg = styled.img`
  height: 100px;
  width: 100px;
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

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

const InputBox = styled.input`
  width: 400px;
`;

const SubmitButton = styled.button`
  width: 200px;
  height: 50px;
  cursor: pointer;
`;

const ImgUpload = styled.input`
  display: none;
`;

export default function QuizImageUploadPage() {
  const [imageUrl, setImageUrl] = useState<string | undefined>("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const fileRef = useRef<HTMLInputElement>(null);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    try {
      const result = await uploadFile({
        variables: { file },
      });
      setImageUrl(result.data?.uploadFile.url);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          ...inputs,
          images: [imageUrl],
        },
      },
    });
    console.log(result);
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <Wrapper>
      <div>
        작성자: <InputBox type="text" id="writer" onChange={onChangeInput} />
      </div>
      <div>
        비밀번호:
        <InputBox type="password" id="password" onChange={onChangeInput} />
      </div>
      <div>
        제목: <InputBox type="text" id="title" onChange={onChangeInput} />
      </div>
      <div>
        내용: <InputBox type="text" id="contents" onChange={onChangeInput} />
      </div>
      <div>
        이미지 첨부:
        <LikeOutlined onClick={onClickImage} />
      </div>
      <ImgUpload type="file" onChange={onChangeFile} ref={fileRef} />
      <UploadImg src={`https://storage.googleapis.com/${imageUrl}`} />
      <SubmitButton onClick={onClickSubmit}>저장하기</SubmitButton>
    </Wrapper>
  );
}
