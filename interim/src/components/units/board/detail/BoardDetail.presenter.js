import SliderComponent from "../../../commons/slider";
import * as S from "./BoardDetail.styles";

export default function BoardDetailUI(props) {
  return (
    <S.Wrapper>
      <S.CarouselWrapper>
        <SliderComponent />
      </S.CarouselWrapper>
      <S.DetailWrapper>
        <S.HeadWrapper>{props.data?.fetchBoard.title}</S.HeadWrapper>
        <S.DetailLine></S.DetailLine>
        <S.ImageWrapper>
          <S.UploadImage
            src={`https://storage.googleapis.com/${props.data?.fetchBoard.images}`}
          />
        </S.ImageWrapper>
        <S.WriterContentsWrapper>
          <S.ProfileWrapper>
            <S.ProfileImage src="/images/profileIcon.png" />
            <div>{props.data?.fetchBoard.writer}</div>
          </S.ProfileWrapper>
          <S.BoardContents>{props.data?.fetchBoard.contents}</S.BoardContents>
        </S.WriterContentsWrapper>
      </S.DetailWrapper>
      <S.FooterWrapper>
        <S.FooterButton onClick={props.onClickMoveListPage}>
          글 목록
        </S.FooterButton>
        <S.FooterButton onClick={props.onClickMoveEditPage}>
          수정
        </S.FooterButton>
        <S.FooterButton onClick={props.onClickDeleteBoard}>삭제</S.FooterButton>
      </S.FooterWrapper>
    </S.Wrapper>
  );
}
