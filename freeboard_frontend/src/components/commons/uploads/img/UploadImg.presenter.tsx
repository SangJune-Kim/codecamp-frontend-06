import * as S from "./UploadImg.styles";

export default function UploadImgUI(props) {
  return (
    <>
      {props.fileUrl ? (
        <S.UploadImage
          onClick={props.onClickUploadFile}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <S.UploadButton onClick={props.onClickUploadFile}>
          <img src="/images/uploadIcon.png" />
        </S.UploadButton>
      )}
      <S.UploadFileHidden
        type="file"
        onChange={props.onChangeFile}
        ref={props.fileRef}
      />
    </>
  );
}
