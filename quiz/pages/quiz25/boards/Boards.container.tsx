import styled from "@emotion/styled";
import { useState } from "react";
import { IBoard, IQuery } from "../../../src/commons/types/generated/types";

const Row = styled.div`
  display: flex;
  width: 100%;
`;
const Col = styled.div`
  width: 20%;
`;

const BasketButton = styled.button`
  width: 20%;
`;

interface IProps {
  data?: Pick<IQuery, "fetchBoards">;
  el?: any;
}

export default function QuizBoards(props: IProps) {
  const [hasBasket, setHasBasket] = useState(false);

  const onClickBasket = (el: IBoard) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);

    if (temp.length === 1) {
      alert("이미 담으신 물품입니다.");
      setHasBasket(true);
      return;
    }
    const { __typename, ...rest } = el;
    baskets.push(rest);
    localStorage.setItem("baskets", JSON.stringify(baskets));
    setHasBasket(true);
  };

  const onClickDeleteBasket = (el: IBoard) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    const newBaskets = baskets.filter(
      (basketEl: IBoard) => basketEl._id !== el._id
    );
    localStorage.setItem("baskets", JSON.stringify(newBaskets));
    setHasBasket(false);
  };

  return (
    <>
      <Row>
        <Col>{props.el.writer}</Col>
        <Col>{props.el.title}</Col>
        <Col>{props.el.contents}</Col>
        <BasketButton
          onClick={
            hasBasket ? onClickDeleteBasket(props.el) : onClickBasket(props.el)
          }
        >
          {hasBasket ? "담기 취소" : "게시물 담기"}
        </BasketButton>
      </Row>
    </>
  );
}
