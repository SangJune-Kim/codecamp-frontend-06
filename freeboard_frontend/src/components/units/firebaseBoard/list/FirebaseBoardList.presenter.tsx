import * as S from "./FirebaseBoardList.styles";
import { v4 as uuidv4 } from "uuid";

export default function FirebaseListUI(props) {
  return (
    <S.Wrapper>
      <S.Row>
        <S.ColumnHeaderBasic>번호</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderContents>내용</S.ColumnHeaderContents>
        <S.ColumnHeaderBasic>제목</S.ColumnHeaderBasic>
      </S.Row>
      {props.dataBoards?.map((el: any, index: number) => (
        <S.Row key={uuidv4()}>
          <S.ColumnBasic>{index + 1}</S.ColumnBasic>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
          <S.ColumnContents>{el.contents}</S.ColumnContents>
          <S.ColumnBasic>{el.title}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.Button onClick={props.onClickMoveToBoardNew}>
        <S.PencilIcon src="/boards/list/pencil.png" />
        게시물 등록하기
      </S.Button>
    </S.Wrapper>
  );
}
