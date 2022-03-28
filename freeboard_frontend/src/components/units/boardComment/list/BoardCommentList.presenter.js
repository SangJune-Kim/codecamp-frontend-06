// 댓글 목록 프레젠터 페이지
import * as S from "./BoardCommentList.styles";
import BoardCommentListItemUI from "./BoardCommentList.presenterItem";

const BoardCommentListUI = (props) => {
  return (
    <S.Wrapper>
      {props.data?.fetchBoardComments.map((el) => (
        <BoardCommentListItemUI key={el._id} el={el} data={props.data} />
      ))}
    </S.Wrapper>
  );
};
export default BoardCommentListUI;
