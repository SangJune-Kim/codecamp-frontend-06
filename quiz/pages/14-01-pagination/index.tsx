import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import Board from "../../src/components/units/board/pagination/Board";
import Pagination from "../../src/components/units/board/pagination/Pagination";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const MapBoardPage = () => {
  const { data, refetch } = useQuery(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  return (
    <Wrapper>
      <Board data={data} />
      <Pagination refetch={refetch} lastPage={lastPage} />
    </Wrapper>
  );
};

export default MapBoardPage;
