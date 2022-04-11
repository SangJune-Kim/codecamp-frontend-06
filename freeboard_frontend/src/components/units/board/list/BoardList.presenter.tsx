// 목록 프레젠터 페이지
import * as S from "./BoardList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import Pagination from "../../../commons/paginations/boards/Pagination";
import { IBoardListUIProps } from "./BoardList.types";

const BoardListUI = (props: IBoardListUIProps) => {
  return (
    <S.Wrapper>
      <S.ListWrapper>
        <S.ListTop>
          <S.ListNumber>ID</S.ListNumber>
          <S.ListTitle>제목</S.ListTitle>
          <S.ListWriter>작성자</S.ListWriter>
          <S.ListCreatedAt>작성 날짜</S.ListCreatedAt>
        </S.ListTop>
        {props.data?.fetchBoards.map((el: any) => (
          <S.ListRow key={el._id}>
            <S.ListNumber>
              {String(el._id).slice(-4).toUpperCase()}
            </S.ListNumber>
            <S.ListTitle id={el._id} onClick={props.onClickMoveDetail}>
              {el.title}
            </S.ListTitle>
            <S.ListWriter>{el.writer}</S.ListWriter>
            <S.ListCreatedAt>{getDate(el.createdAt)}</S.ListCreatedAt>
          </S.ListRow>
        ))}
      </S.ListWrapper>
      <S.BottomWrapper>
        <S.PageNumber>
          <Pagination refetch={props.refetch} lastPage={props.lastPage} />
        </S.PageNumber>
        <S.CreateNewBoardButton onClick={props.onClickMoveNewBoard}>
          <S.PencilIcon src="/boards/list/pencil.png" />
          게시물 등록하기
        </S.CreateNewBoardButton>
      </S.BottomWrapper>
    </S.Wrapper>
  );
};
export default BoardListUI;