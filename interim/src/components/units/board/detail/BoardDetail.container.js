import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  console.log(data);
  const onClickMoveEditPage = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };
  const onClickMoveListPage = () => {
    router.push(`/boards`);
  };

  const onClickDeleteBoard = async () => {
    try {
      await deleteBoard({
        variables: { boardId: String(router.query.boardId) },
      });
      alert("삭제가 완료되었습니다.");
      router.push("/boards");
    } catch (error) {
      alert("삭제가 완료되지 않았습니다.");
    }
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveEditPage={onClickMoveEditPage}
      onClickMoveListPage={onClickMoveListPage}
      onClickDeleteBoard={onClickDeleteBoard}
    />
  );
}
