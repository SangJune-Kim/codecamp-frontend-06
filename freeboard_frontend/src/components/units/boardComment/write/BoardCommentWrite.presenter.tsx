// 프레젠터 컴포넌트
import * as S from "./BoardCommentWrite.styles";
import { Rate } from "antd";

const BoardCommentWriteUI = (props) => {
  return (
    <S.Wrapper>
      <S.BoardDetailCommentWrapper>
        {!props.isEdit && (
          <S.CommentHeader>
            <S.CommentIcon src="/boards/detail/commentIcon.png" />
            댓글
          </S.CommentHeader>
        )}
        <S.CommentInfo>
          <S.CommentWriterInput
            type="text"
            placeholder="작성자"
            onChange={props.onChangeCommentWriter}
            readOnly={props.el?.writer}
            value={props.commentWriter || props.el?.writer || ""}
          />
          <S.CommentPasswordInput
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangeCommentPassword}
            value={props.commentPassword}
          />
          <Rate onChange={props.onChangeRate} value={props.commentRating} />
        </S.CommentInfo>
        <S.CommentContentsWrapper>
          <S.CommentContentsInput
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.onChangeCommentContents}
            value={props.commentContents || props.el?.contents || ""}
            maxLength={100}
          />
          <S.CommentRegisterWrapper>
            <div>{props.commentContents.length}/100</div>
            <S.CommentRegisterButton
              onClick={
                props.isEdit
                  ? props.onClickBoardCommentUpdate
                  : props.onClickBoardCommentRegister
              }
            >
              {props.isEdit ? "수정하기" : "등록하기"}
            </S.CommentRegisterButton>
          </S.CommentRegisterWrapper>
        </S.CommentContentsWrapper>
      </S.BoardDetailCommentWrapper>
    </S.Wrapper>
  );
};

export default BoardCommentWriteUI;
