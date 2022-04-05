// 목록 컨테이너 페이지
import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

const BoardList = () => {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const router = useRouter();
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const onClickMoveNewBoard = () => {
    router.push("/boards/new");
  };

  const onClickMoveDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
      router.push(`/boards/${event.target.id}`);
  };

  return (
    <BoardListUI
      data={data}
      refetch={refetch}
      lastPage={lastPage}
      onClickMoveDetail={onClickMoveDetail}
      onClickMoveNewBoard={onClickMoveNewBoard}
    />
  );
};
export default BoardList;
