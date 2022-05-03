// 마켓 상세페이지 컨테이너

import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { basketsLengthState } from "../../../../commons/store";
import useAuth from "../../../commons/hooks/useAuth";
import MarketDetailUI from "./MarketDetail.presenter";
import {
  CPTOBS,
  DELETE_USEDITEM,
  FETCH_USEDITEM,
  USEDITEM_PICK,
} from "./MarketDetail.queries";

const MarketDetail = () => {
  useAuth();
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  const [createPointTransactionOfBuyingAndSelling] = useMutation(CPTOBS);
  const [deleteUseditem] = useMutation(DELETE_USEDITEM);
  const [toggleUseditemPick] = useMutation(USEDITEM_PICK);
  const [, setBasketsLength] = useRecoilState(basketsLengthState);

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
  console.log(data);

  // 장바구니
  const onClickBasket = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    const temp = baskets.filter((basketEl) => basketEl._id === el._id);
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다");
      return;
    }
    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(baskets));
    Modal.success({ content: "상품이 장바구니에 담겼습니다." });
    setBasketsLength(baskets.length);
  };

  const onClickBuy = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: String(router.query.useditemId) },
      });
      Modal.success({ content: "상품 구매 완료" });
      router.push("/");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <MarketDetailUI
      data={data}
      onClickMoveEditPage={onClickMoveEditPage}
      onClickMoveListPage={onClickMoveListPage}
      onClickDelete={onClickDelete}
      onClickPick={onClickPick}
      onClickBuy={onClickBuy}
      // 장바구니
      onClickBasket={onClickBasket}
    />
  );
};
export default MarketDetail;
