import BoardListUI from "./BoardList.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";

export default function BoardList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  const onClickMoveDetail = (event) => {
    router.push(`/boards/${event.target.id}`);
    console.log(event.target.id);
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveDetail={onClickMoveDetail}
      fetchMore={fetchMore}
    />
  );
}
