// 마켓 상세페이지 컨테이너

import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import MarketDetailUI from "./MarketDetail.presenter";
import {
  DELETE_USEDITEM,
  FETCH_USEDITEM,
  USEDITEM_PICK,
} from "./MarketDetail.queries";

export default function MarketDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  const [deleteUseditem] = useMutation(DELETE_USEDITEM);
  const [toggleUseditemPick] = useMutation(USEDITEM_PICK);

  const onClickMoveEditPage = () => {
    router.push(`/markets/${router.query.useditemId}/edit`);
  };

  const onClickMoveListPage = () => {
    router.push(`/markets`);
  };

  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: String(router.query.useditemId) },
      });
      Modal.success({ content: "삭제가 완료되었습니다." });
      router.push("/markets");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickPick = async () => {
    try {
      await toggleUseditemPick({
        variables: { useditemId: String(router.query.useditemId) },
        refetchQueries: [
          {
            query: FETCH_USEDITEM,
            variables: { useditemId: String(router.query.useditemId) },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  //  // 장바구니
  //  const onClickBasket = (el) => () => {
  //   // 1. 기본 장바구니 가져오기
  //   const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
  //   // 2. 이미 담겼는지 확인하기
  //   const temp = baskets.filter((basketEl) => basketEl._id === el._id);
  //   if (temp.length === 1) {
  //     alert("이미 담으신 물품입니다");
  //     return;
  //   }
  //   // 3. 장바구니에 담기
  //   const { __typename, ...newEl } = el;
  //   baskets.push(newEl);
  //   localStorage.setItem("baskets", JSON.stringify(baskets));
  //   Modal.success({ content: "상품이 장바구니에 담겼습니다." });
  //   setBasketsLength(baskets.length);
  // };

  // // 4. 장바구니에서 삭제한다면
  // // const newBaskets = baskets.filter((basketEl: IBoard) => basketEl._id !== el._id);

  return (
    <MarketDetailUI
      data={data}
      onClickMoveEditPage={onClickMoveEditPage}
      onClickMoveListPage={onClickMoveListPage}
      onClickDelete={onClickDelete}
      onClickPick={onClickPick}
    />
  );
}
