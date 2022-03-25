//목록 프레젠터 페이지
import * as S from "./BoardList.styles";
import { getDate } from "../../../../commons/libraries/utils";

const BoardListUI = (props) => {
  return (
    <S.Wrapper>
      <S.ListWrapper>
        <S.ListTop>
          <S.ListNumber>ID</S.ListNumber>
          <S.ListTitle>제목</S.ListTitle>
          <S.ListWriter>작성자</S.ListWriter>
          <S.ListCreatedAt>작성 날짜</S.ListCreatedAt>
        </S.ListTop>
        {props.data?.fetchBoards.map((el) => (
          <S.ListRow key={el._id}>
            <S.ListNumber>
              {String(el._id).slice(-4).toUpperCase()}
            </S.ListNumber>
            <S.ListTitle>{el.title}</S.ListTitle>
            <S.ListWriter>{el.writer}</S.ListWriter>
            <S.ListCreatedAt>{getDate(el.createdAt)}</S.ListCreatedAt>
          </S.ListRow>
        ))}
      </S.ListWrapper>
      <S.BottomWrapper>
        <S.PageNumber>
          <S.BeforeNextIcon src="/boards/list/beforeIcon.png" />1 2
          <S.BeforeNextIcon src="/boards/list/nextIcon.png" />
        </S.PageNumber>

        <S.CreateNewBoardButton>
          <S.PencilIcon src="/boards/list/pencil.png" />
          게시물 등록하기
        </S.CreateNewBoardButton>
      </S.BottomWrapper>
    </S.Wrapper>
  );
};
export default BoardListUI;