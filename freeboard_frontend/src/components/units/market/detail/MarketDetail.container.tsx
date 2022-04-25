// 마켓 상세페이지 컨테이너

import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import MarketDetailUI from "./MarketDetail.presenter";
import { DELETE_USEDITEM, FETCH_USEDITEM } from "./MarketDetail.queries";

export default function MarketDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  const [deleteUseditem] = useMutation(DELETE_USEDITEM);

  const onClickMoveEditPage = () => {
    router.push(`/markets/${router.query.boardId}/edit`);
  };

  const onClickMoveListPage = () => {
    router.push(`/markets`);
  };

  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: { boardId: String(router.query.boardId) },
      });
      Modal.success({ content: "삭제가 완료되었습니다." });
      router.push("/markets");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <MarketDetailUI
      data={data}
      onClickMoveEditPage={onClickMoveEditPage}
      onClickMoveListPage={onClickMoveListPage}
      onClickDeleteBoard={onClickDelete}
    />
  );
}
