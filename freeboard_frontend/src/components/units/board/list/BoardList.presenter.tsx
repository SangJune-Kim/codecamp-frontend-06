// 목록 프레젠터 페이지
import * as S from "./BoardList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import Pagination from "../../../commons/paginations/boards/Pagination";
import { IBoardListUIProps } from "./BoardList.types";
import { v4 as uuidv4 } from "uuid";

const BoardListUI = (props: IBoardListUIProps) => {
  return (
    <S.Wrapper>
      <S.SearchWrapper>
        <S.SearchBox>
          <S.SearchImg src="/boards/list/search.png" />
          <S.SearchInput
            placeholder="제목을 입력하세요"
            onChange={props.onChangeSearch}
          />{" "}
        </S.SearchBox>
        <S.SearchDate placeholder="2022.01.01 ~ 2022.04.18" />{" "}
        {/* <S.SearchButton 
        onClick={props.onClickSearch}
        >검색하기</S.SearchButton> */}
      </S.SearchWrapper>
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
              {el.title
                .replaceAll(props.keyWord, `))@_#${props.keyWord}))@_#`)
                .split("))@_#")
                .map((word) => (
                  <S.ListTitleKeyWord
                    key={uuidv4()}
                    isMatched={props.keyWord === word}
                    onClick={props.onClickMoveDetail}
                    id={el._id}
                  >
                    {word}
                  </S.ListTitleKeyWord>
                ))}
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
