import * as S from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.HeadWrapper>
          {props.isEdit ? "게시물 수정" : "새 글 작성"}
        </S.HeadWrapper>
        <S.HeadLine></S.HeadLine>
        <S.TitleWrapper>
          <S.Titles>제목</S.Titles>
          <S.TitleInput
            type="text"
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
          />
        </S.TitleWrapper>
        <S.ContentsWrapper>
          <S.Titles>내용</S.Titles>
          <S.ContentsInput
            type="text"
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
          />
        </S.ContentsWrapper>
        <S.ImageWrapper>
          <S.Titles>이미지</S.Titles>
          <S.RealImgInput
            type="file"
            onChange={props.onChangeFile}
            ref={props.fileRef}
          />
          <S.UploadImageBox onClick={props.onClickUpload}>
            <img src="/images/uploadIcon.png" />
          </S.UploadImageBox>
          <S.UploadImageBox onClick={props.onClickUpload}>
            <img src="/images/uploadIcon.png" />
          </S.UploadImageBox>
          <S.UploadImageBox onClick={props.onClickUpload}>
            <img src="/images/uploadIcon.png" />
          </S.UploadImageBox>
        </S.ImageWrapper>
        <S.BottomWrapper>
          <S.WriterWrapper>
            <S.Titles>작성자</S.Titles>
            <S.WriterInput
              type="text"
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer}
              disabled={props.isEdit}
            />
          </S.WriterWrapper>
          <S.PasswordWrapper>
            <S.Titles>비밀번호</S.Titles>
            <S.PasswordInput
              type="password"
              onChange={props.onChangePassword}
            />
          </S.PasswordWrapper>
        </S.BottomWrapper>
      </S.Wrapper>
      <S.FooterWrapper>
        <S.RegistrationButton
          onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit}
        >
          {props.isEdit ? "수정" : "등록"}
        </S.RegistrationButton>
        <S.RegistrationButton onClick={props.onClickCancel}>
          취소
        </S.RegistrationButton>
      </S.FooterWrapper>
    </>
  );
}
