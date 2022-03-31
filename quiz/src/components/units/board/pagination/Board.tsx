import * as S from "./Board.styles";

export default function Board(props) {
  return (
    <S.BoardListWrapper>
      <S.MyRow>
        <S.MyColumn>작성자</S.MyColumn>
        <S.MyColumn>제목</S.MyColumn>
      </S.MyRow>
      {props.data?.fetchBoards.map((el) => (
        <S.MyRow key={el._id}>
          <S.MyColumn>{el.writer}</S.MyColumn>
          <S.MyColumn>{el.title}</S.MyColumn>
        </S.MyRow>
      ))}
    </S.BoardListWrapper>
  );
}
