// 댓글 목록 컨테이너 페이지
import BoardCommentListUI from "./BoardCommentList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";
import { useRouter } from "next/router";

const BoardCommentList = () => {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });
  console.log(data);

  return <BoardCommentListUI data={data} />;
};
export default BoardCommentList;
