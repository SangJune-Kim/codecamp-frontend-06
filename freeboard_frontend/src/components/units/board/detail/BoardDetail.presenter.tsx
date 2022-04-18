// 상세페이지 프레젠터 컴포넌트
import * as S from "./BoardDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardDetailProps } from "./BoardDetail.types";

const BoardDetailUI = (props: IBoardDetailProps) => {
  return (
    <S.Wrapper>
      <S.BoardWrapper>
        <S.Info>
          <S.ProfileBox>
            <S.ProfileImg src="/Profile.png" />
            <S.Profile>
              <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
              <S.CreatedAt>
                {getDate(props.data?.fetchBoard.createdAt)}
              </S.CreatedAt>
            </S.Profile>
          </S.ProfileBox>
          <S.IconBox>
            <S.LinkIcon src="/link.png" />
            <S.LocationIcon src="/location.png" />
          </S.IconBox>
        </S.Info>
        <S.ContentsWrapper>
          <S.TitleInput>{props.data?.fetchBoard.title}</S.TitleInput>
          <S.ImgWrapper>
            {props.data?.fetchBoard.images
              ?.filter((el) => el)
              .map((el) => (
                <S.UploadImage
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
          </S.ImgWrapper>
          <S.ContentsInput>{props.data?.fetchBoard.contents}</S.ContentsInput>
        </S.ContentsWrapper>
        <S.YoutubeBox>
          {props.data?.fetchBoard.youtubeUrl && (
            <S.Youtube
              url={props.data?.fetchBoard.youtubeUrl}
              width={560}
              height={315}
            />
          )}
        </S.YoutubeBox>
        <S.LikeWrapper>
          <S.LikeBox>
            <S.LikeButton onClick={props.onClickLike}>
              <S.LikeIcon />
            </S.LikeButton>
            <S.LikeNumber>{props.data?.fetchBoard?.likeCount}</S.LikeNumber>
          </S.LikeBox>
          <S.disLikeBox>
            <S.disLikeButton onClick={props.onClickDisLike}>
              <S.disLikeIcon />
            </S.disLikeButton>
            <S.disLikeNumber>
              {props.data?.fetchBoard?.dislikeCount}
            </S.disLikeNumber>
          </S.disLikeBox>
        </S.LikeWrapper>
      </S.BoardWrapper>
      <S.ButtonWrapper>
        <S.ListButton onClick={props.onClickMoveListPage}>
          목록으로
        </S.ListButton>
        <S.EditButton onClick={props.onClickMoveEditPage}>
          수정하기
        </S.EditButton>
        <S.DeleteButton onClick={props.onClickDeleteBoard}>
          삭제하기
        </S.DeleteButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};
export default BoardDetailUI;
