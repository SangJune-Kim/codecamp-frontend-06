import * as S from "./MarketAnswer.styles";

export default function MarketCommentAnswerUI(props) {
  return (
    <S.Wrapper>
      <S.CommentWriterInput
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        onChange={props.onChangeContents}
        defaultValue={props?.contents}
        maxLength={100}
      />
      <S.CommentRegisterWrapper>
        <S.CommentCount>{props?.contents?.length}/100</S.CommentCount>
        <S.CommentRegisterButton
          onClick={props.isEdit ? props.updateAnswer : props.submitAnswer}
          isActive={props.isEdit ? true : props.isValid}
          disabled={props.isEdit ? false : !props.isValid}
        >
          {props.isEdit ? "답변 수정" : "답변 등록"}
        </S.CommentRegisterButton>
      </S.CommentRegisterWrapper>
    </S.Wrapper>
  );
}
