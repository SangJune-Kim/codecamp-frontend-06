import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./MarketCommentList.styles";

const MarketCommentListItemUI = (props) => {
  return (
    <>
      <S.CommentFetchWrapper>
        <S.CommentProfileImg src="/Profile.png" />
        <S.CommentContentsBox>
          <S.CommentFetchHeader>
            <S.CommentWriter>{props.el?.user.name}</S.CommentWriter>
            <div>
              <S.UpdateIconButton>
                <S.UpdateIcon src="/images/update.png" />
              </S.UpdateIconButton>
              <S.DeleteIconButton>
                <S.DeleteIcon src="/images/delete.png" />
              </S.DeleteIconButton>
            </div>
          </S.CommentFetchHeader>

          <S.CommentContents>{props.el?.contents}</S.CommentContents>
          <S.CommentCreatedAt>
            {getDate(props.el?.createdAt)}
          </S.CommentCreatedAt>
        </S.CommentContentsBox>
      </S.CommentFetchWrapper>
    </>
  );
};
export default MarketCommentListItemUI;
