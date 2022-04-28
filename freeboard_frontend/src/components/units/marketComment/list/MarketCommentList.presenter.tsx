// 마켓 댓글 목록 프레젠터
import MarketCommentListItemUI from "./MarketCommentList.presenterItem";
import * as S from "./MarketCommentList.styles";

const MarketCommentListUI = (props) => {
  return (
    <S.Wrapper>
      {props.data?.fetchUseditemQuestions.map(
        (el: any) =>
          (
            <MarketCommentListItemUI key={el._id} el={el} data={props.data} />
          ) || <div></div>
      )}
    </S.Wrapper>
  );
};
export default MarketCommentListUI;
