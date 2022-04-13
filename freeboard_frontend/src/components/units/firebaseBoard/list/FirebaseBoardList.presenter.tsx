import Pagination from "../../../commons/paginations/boards/Pagination";
import * as S from "./FirebaseBoardList.styles";
import { collection, getFirestore, getDocs } from "firebase/firestore/lite";
import { firebaseApp } from "../../../../../pages/_app";

export default function FireBaseBoardListUI(props) {
  const aaa = async () => {
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);

    const boardList = result.docs.map((el) => el.data());
    console.log(boardList);
  };
  aaa();

  return (
    <S.Wrapper>
      <S.BestBoardWrapper>
        가나다라마바사 베스트 게시물 자리자리
      </S.BestBoardWrapper>
      <S.ListWrapper>
        <S.ListTop>
          <S.ListNumber>ID</S.ListNumber>
          <S.ListTitle>제목</S.ListTitle>
          <S.ListWriter>작성자</S.ListWriter>
          <S.ListCreatedAt>작성 날짜</S.ListCreatedAt>
        </S.ListTop>
        {/* {props.data?.fetchBoards.map((el: any) => (
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
        ))} */}
      </S.ListWrapper>
      <S.BottomWrapper>
        <S.PageNumber>
          <Pagination refetch={props.refetch} lastPage={props.lastPage} />
        </S.PageNumber>
        {/* <S.CreateNewBoardButton onClick={props.onClickMoveNewBoard}> */}
        {/* <S.PencilIcon src="/boards/list/pencil.png" />
          게시물 등록하기
        </S.CreateNewBoardButton> */}
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
