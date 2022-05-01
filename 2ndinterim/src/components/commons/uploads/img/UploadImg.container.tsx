import { useMutation } from "@apollo/client";
import { useRef } from "react";
import UploadImgUI from "./UploadImg.presenter";
import { UPLOAD_FILE } from "./UploadImg.queries";

export default function UploadImg(props) {
  // 이미지 업로드 부분
  const fileRef = useRef(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onChangeFile = async (event) => {
    const file = event.target.files?.[0];
    try {
      const resultFile = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(resultFile.data?.uploadFile.url, props.index);
    } catch (error) {
      alert("이미지가 업로드되지 않았습니다.");
    }
  };

  const onClickUploadFile = () => {
    fileRef.current?.click();
  };

  return (
    <UploadImgUI
      onClickUploadFile={onClickUploadFile}
      onChangeFile={onChangeFile}
      fileRef={fileRef}
      fileUrl={props.fileUrl}
    />
  );
}
