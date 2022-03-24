// 상세페이지 프레젠터 컴포넌트
import * as S from "./BoardDetail.styles"


const BoardDetailUI = () => {

  return (
    <S.Wrapper>
      <S.BoardWrapper> 
        <S.Info>
          <S.ProfileBox>
          <S.ProfileImg src= "/Profile.png"/>
          <S.Profile>
            <S.Writer>프로필 이름</S.Writer> 
            <S.CreatedAt>게시글 생성 날짜</S.CreatedAt>
          </S.Profile>
          </S.ProfileBox>
          <S.IconBox>
          <S.LinkIcon src="/link.png"/>
          <S.LocationIcon src="/location.png"/>
          </S.IconBox>
        </S.Info>
        <S.ContentsWrapper>
          <S.TitleInput>게시글 제목입니다.</S.TitleInput>
          <S.ImgInput src="/backgroundImg.png"/>
          <S.ContentsInput>게시글 내용
          </S.ContentsInput>
        </S.ContentsWrapper>
        <S.YoutubeBox>
          <S.YoutubeInput src="https://www.youtube.com/embed/3P1CnWI62Ik"/>
        </S.YoutubeBox>
        <S.LikeWrapper>
          <S.LikeBox>
            <S.LikeIcon src="/like.png"/>
            <S.LikeNumber>2222</S.LikeNumber>
            </S.LikeBox>
          <S.unLikeBox>
            <S.unLikeIcon src="/unlike.png" />
            <S.unLikeNumber>3333</S.unLikeNumber>
          </S.unLikeBox>
          </S.LikeWrapper>
      </S.BoardWrapper>
      <S.ButtonWrapper>
        <S.ListButton>목록으로</S.ListButton>
        <S.EditButton>수정하기</S.EditButton>
        <S.DeleteButton>삭제하기</S.DeleteButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
export default BoardDetailUI