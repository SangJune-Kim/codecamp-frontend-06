// 목록 컨테이너 페이지
import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";

const BoardList = () => {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();

  const onClickMoveNewBoard = () => {
    router.push("/boards/new");
  };

  const onClickMoveDetail = (event) => {
    if (event.target) router.push(`/boards/${event.target.id}`);
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveDetail={onClickMoveDetail}
      onClickMoveNewBoard={onClickMoveNewBoard}
    />
  );
};
export default BoardList;
