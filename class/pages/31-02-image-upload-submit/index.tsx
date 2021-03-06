import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUploadPreviewPage() {
  const [file1, setFile1] = useState<File>();
  const [imgUrl, setImgUrl] = useState("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      alert("파일이 없습니다.");
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result);
        setImgUrl(data.target?.result);
        setFile1(file);
      }
    };
  };

  const onClickSubmit = async () => {
    const result1 = await uploadFile({ variables: { file: file1 } });
    const imageUrl = result1.data?.uploadFile.url;
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "안녕하세요",
          contents: "이미지 업로드",
          images: [imageUrl],
        },
      },
    });
    console.log(result2.data.createBoard._id);
  };

  return (
    <>
      <div>
        <input type="file" onChange={onChangeFile} />
        <img src={imgUrl} />
        <button onClick={onClickSubmit}>게시글 등록하기 </button>
      </div>
    </>
  );
}
