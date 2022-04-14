// import Pagination from "../../../commons/paginations/boards/Pagination";
// import * as S from "./FirebaseBoardList.styles";
// import { firebaseApp } from "../../../../../pages/_app";
// import { collection, getFirestore, getDocs } from "firebase/firestore/lite";
// import { getDate } from "../../../../commons/libraries/utils";
// import { useState } from "react";

// export default function FireBaseBoardListUI(props) {
//   const [firebaseBoardList, setFirebaseBoardList] = useState([]);

//   const aaa = async () => {
//     const board = collection(getFirestore(firebaseApp), "board");
//     const result = await getDocs(board);
//     // console.log(result.docs[0]._document.data.value.mapValue.fields);
//     const boardList = result.docs.map((el) => el.data());
//     console.log(boardList);
//     setFirebaseBoardList(boardList);
//   };
//   aaa();
//   // el._document.data.value.mapValue.fields

//   return (
//     <S.Wrapper>
//       <S.BestBoardWrapper>
//         가나다라마바사 베스트 게시물 자리자리
//       </S.BestBoardWrapper>
//       <S.ListWrapper>
//         <S.ListTop>
//           <S.ListNumber>ID</S.ListNumber>
//           <S.ListTitle>제목</S.ListTitle>
//           <S.ListWriter>작성자</S.ListWriter>
//           <S.ListCreatedAt>작성 날짜</S.ListCreatedAt>
//         </S.ListTop>
//         {firebaseBoardList.map((el: any) => (
//           <S.ListRow key={el.writer.stringValue}>
//             <S.ListNumber>{el.contents.stringValue}</S.ListNumber>
//             <S.ListTitle>{el.title.stringValue}</S.ListTitle>
//             {/* <S.ListWriter>{el.writer.stringValue}</S.ListWriter>
//             {/* <S.ListCreatedAt>{getDate(el.createdAt)}</S.ListCreatedAt> */}
//           </S.ListRow>
//         ))}
//       </S.ListWrapper>
//       <S.BottomWrapper>
//         <S.PageNumber>
//           <Pagination refetch={props.refetch} lastPage={props.lastPage} />
//         </S.PageNumber>
//         {/* <S.CreateNewBoardButton onClick={props.onClickMoveNewBoard}> */}
//         {/* <S.PencilIcon src="/boards/list/pencil.png" />
//           게시물 등록하기
//         </S.CreateNewBoardButton> */}
//       </S.BottomWrapper>
//     </S.Wrapper>
//   );
// }
