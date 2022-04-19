import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IBoard } from "../../../src/commons/types/generated/types";

const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;
const Col = styled.div`
  width: 30%;
`;

export default function BasketPage() {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, []);
  return (
    <>
      <HeaderRow>
        <Col>작성자</Col>
        <Col>제목</Col>
        <Col>내용</Col>
      </HeaderRow>
      {basketItems.map((el: IBoard) => (
        <Row key={el._id}>
          <Col>{el.writer}</Col>
          <Col>{el.title}</Col>
          <Col>{el.contents}</Col>
        </Row>
      ))}
    </>
  );
}
