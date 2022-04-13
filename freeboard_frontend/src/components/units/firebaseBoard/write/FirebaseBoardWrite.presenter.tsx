// import { Modal } from "antd";
// import DaumPostcode from "react-daum-postcode";
import * as S from "./FirebaseBoardWrite.styles";

export default function FireBaseBoardWriteUI(props) {
  return (
    <S.Wrapper>
      <S.Header>{props.isEdit ? "수정페이지" : "등록페이지"}</S.Header>
      <S.HeaderBox>
        <S.ProfileBox>
          <S.Head>
            <S.HeadText>작성자</S.HeadText>
            <S.Writer
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer}
            />
            <S.ErrorBox>{props.writerError}</S.ErrorBox>
          </S.Head>
          <S.Head>
            <S.HeadText>비밀번호</S.HeadText>
            <S.Password
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={props.onChangePassword}
            />
            <S.ErrorBox>{props.passwordError}</S.ErrorBox>
          </S.Head>
        </S.ProfileBox>
        <S.Head>
          <S.HeadText>제목</S.HeadText>
          <S.TitleInput
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
          />
          <S.ErrorBox>{props.titleError}</S.ErrorBox>
        </S.Head>
      </S.HeaderBox>

      <S.Head>
        <S.HeadText>내용</S.HeadText>
        <S.ContentsBox
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard.contents}
        />
        <S.ErrorBox>{props.contentsError}</S.ErrorBox>
      </S.Head>

      {/* <S.HeadText>주소</S.HeadText>
      <S.Address>
        <S.AddressNumber
          value={
            props.zipcode
              ? props.zipcode
              : props.data?.fetchBoard.boardAddress?.zipcode
          }
          readOnly={true}
        />
        <S.AddressSearch onClick={props.onClickModal}>
          우편번호 검색
        </S.AddressSearch>
        {props.isOpen && (
          <Modal
            visible={true}
            title={"우편번호 검색"}
            onOk={props.onClickModal}
            onCancel={props.onClickModal}
          >
            <DaumPostcode onComplete={props.onClickPostCode} />
          </Modal>
        )}
      </S.Address> */}
      {/* <S.HeadBox
        value={
          props.address || props.data?.fetchBoard.boardAddress?.address || ""
        }
        readOnly={true}
      />

      <S.HeadBox type="text" placeholder="상세 주소를 입력하세요." /> */}
      {/* 
      <S.Head>
        <S.HeadText>유튜브</S.HeadText>
        <S.HeadBox
          onChange={props?.onChangeYoutubeUrl}
          type="text"
          placeholder="링크를 붙혀넣어주세요."
          defaultValue={props.data?.fetchBoard.youtubeUrl || ""}
        />
      </S.Head> */}
      {/* <S.BottomBox>
        <S.HeadText>사진첨부</S.HeadText>
        <S.PictureBox>
          <S.Picture>
            <p>➕</p>
            <p>Upload</p>
          </S.Picture>
          <S.Picture>
            <p>➕</p>
            <p>Upload</p>
          </S.Picture>
          <S.Picture>
            <p>➕</p>
            <p>Upload</p>
          </S.Picture>
        </S.PictureBox>

        <S.HeadText>메인 설정</S.HeadText>
        <S.SelectBox>
          <S.SelectYoutube>
            <S.Select type="radio" name="select" />
            유튜브
          </S.SelectYoutube>
          <S.SelectPicture>
            <S.Select type="radio" name="select" />
            사진
          </S.SelectPicture>
        </S.SelectBox>
      </S.BottomBox> */}
      <S.Register>
        <S.RegisterButton
          onClick={props.isEdit ? props.handleEdit : props.handleRegister}
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.RegisterButton>
      </S.Register>
    </S.Wrapper>
  );
}
