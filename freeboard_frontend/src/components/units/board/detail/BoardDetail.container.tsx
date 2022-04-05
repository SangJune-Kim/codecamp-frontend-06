// 상세페이지 컨테이너 컴포턴트
import BoardDetailUI from "./BoardDetail.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
  DELETE_BOARD,
} from "./BoardDetail.queries";
import { Modal } from "antd";

const BoardDetail = () => {
  const router = useRouter();
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  const onClickMoveEditPage = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickMoveListPage = () => {
    router.push(`/boards`);
  };

  const onClickLike = async () => {
    try {
      await likeBoard({
        variables: { boardId: String(router.query.boardId) },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickDisLike = async () => {
    try {
      await dislikeBoard({
        variables: { boardId: String(router.query.boardId) },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickDeleteBoard = async () => {
    try {
      await deleteBoard({
        variables: { boardId: String(router.query.boardId) },
      });
      Modal.success({ content: "삭제가 완료되었습니다." });
      router.push("/boards");
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <BoardDetailUI
        data={data}
        onClickMoveEditPage={onClickMoveEditPage}
        onClickMoveListPage={onClickMoveListPage}
        onClickLike={onClickLike}
        onClickDisLike={onClickDisLike}
        onClickDeleteBoard={onClickDeleteBoard}
      />
    </>
  );
};
export default BoardDetail;
