import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { IBoard } from "../../../src/commons/types/generated/types";
import QuizBoards from "./Boards.container";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const FetchBoardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;

const Col = styled.div`
  width: 20%;
`;
export default function QuizBoardsPage() {
  const { data } = useQuery(FETCH_BOARDS);
  return (
    <FetchBoardsWrapper>
      <HeaderRow>
        <Col>작성자</Col>
        <Col>제목</Col>
        <Col>내용</Col>
        <Col></Col>
      </HeaderRow>
      {data?.fetchBoards.map((el: IBoard) => (
        <QuizBoards data={data} el={el} key={el._id} />
      ))}
    </FetchBoardsWrapper>
  );
}
