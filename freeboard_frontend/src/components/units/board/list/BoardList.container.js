//목록 컨테이너 페이지
import BoardListUI from "./BoardList.presenter";
import { useQuery, gql } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";

const BoardList = () => {
  const { data } = useQuery(FETCH_BOARDS);

  return <BoardListUI data={data} />;
};
export default BoardList;
