import Head from "next/head";
import { useState } from "react";
import { Modal } from "antd";
import styled from "@emotion/styled";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_USER_LOGGED_IN,
} from "./Payment.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

const PointCharge = styled.span`
  margin-left: 10px;
  text-decoration: underline;
  cursor: pointer;
`;

export default function Payment() {
  const [isOpen, setIsOpen] = useState(false);
  const [amountPoint, setAmountPoint] = useState(100);

  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  // 모달
  const onClickCharge = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCancel = () => {
    setIsOpen(false);
    setAmountPoint(100);
  };
  const handleOk = () => {
    setIsOpen(false);
  };

  const onChangePoint = (event) => {
    setAmountPoint(event.target.value);
  };

  const requestPay = () => {
    setIsOpen(false);
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "포인트 충전",
        amount: amountPoint,
        buyer_email: "ghfnsgldl@gmail.com",
        buyer_name: data?.fetchUserLoggedIn.name,
        m_redirect_url: "http://localhost:3000/",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          // 백엔드에 결제관련 데이터 넘겨주기(=뮤테이션 실행하기)
          createPointTransactionOfLoading({
            variables: { impUid: String(rsp.imp_uid) },
          });
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다. 다시 시도해 주세요.");
        }
      }
    );
  };

  return (
    <div>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <PointCharge onClick={onClickCharge}>충전</PointCharge>
      <Modal
        title="결제할 금액을 선택해주세요"
        visible={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <button key="ok" type="primary" onClick={requestPay}>
            충전하기
          </button>,
        ]}
      >
        <select onChange={onChangePoint}>
          <option value={100}>100</option>
          <option value={500}>500</option>
          <option value={2000}>2,000</option>
          <option value={5000}>5,000</option>
        </select>
      </Modal>
    </div>
  );
}
