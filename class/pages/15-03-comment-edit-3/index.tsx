import { useQuery, gql } from "@apollo/client";
import BoardCommentItem from "../../src/components/units/board/15-board-comment";

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

const MapBoardPage = () => {
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <BoardCommentItem key={el._id} el={el} />
      ))}
    </div>
  );
};

export default MapBoardPage;
