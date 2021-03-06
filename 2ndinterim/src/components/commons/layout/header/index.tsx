import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  basketsLengthState,
} from "../../../../commons/store";
import { Modal } from "antd";
import Head from "next/head";

declare const window: typeof globalThis & {
  IMP: any;
};

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  padding: 0 150px;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid black;
`;

const Div = styled.div`
  margin-left: 40px;
  cursor: pointer;
`;

const BasketCount = styled.div`
  margin-left: 5px;
  width: 20px;
  height: 20px;
  color: white;
  background-color: #ffe004;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  border-radius: 10px;
  margin-bottom: 2px;
  padding-top: 2px;
`;

const PointCharge = styled.span`
  margin-left: 10px;
  text-decoration: underline;
  cursor: pointer;
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      userPoint {
        amount
      }
    }
  }
`;

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      amount
    }
  }
`;

export default function LayoutHeader() {
  const router = useRouter();
  const [amountPoint, setAmountPoint] = useState(100);
  const [isOpen, setIsOpen] = useState(false);
  const [basketsLength] = useRecoilState(basketsLengthState);
  const onClickMoveLogin = () => {
    router.push("/login/");
  };
  const onClickMoveRegister = () => {
    router.push("/register/");
  };
  const [accessToken] = useRecoilState(accessTokenState);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const { data } = useQuery(FETCH_USER_LOGGED_IN);
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
    const IMP = window.IMP; // ?????? ??????
    IMP.init("imp49910675"); // Example: imp00000000
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "????????? ??????",
        amount: amountPoint,
        buyer_email: "ghfnsgldl@gmail.com",
        buyer_name: data?.fetchUserLoggedIn.name,
        m_redirect_url: "http://localhost:3000/",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // ?????? ?????? ??? ??????,
          console.log(rsp);
          // ???????????? ???????????? ????????? ????????????(=???????????? ????????????)
          createPointTransactionOfLoading({
            variables: { impUid: String(rsp.imp_uid) },
          });
        } else {
          // ?????? ?????? ??? ??????,
          alert("????????? ??????????????????. ?????? ????????? ?????????.");
        }
      }
    );
  };

  return (
    <>
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
      <Wrapper>
        {accessToken ? (
          <Div>
            {data?.fetchUserLoggedIn.name}???
            <span>?????????: {data?.fetchUserLoggedIn?.userPoint?.amount}</span>
            <PointCharge onClick={onClickCharge}>??????</PointCharge>
          </Div>
        ) : (
          <Div onClick={onClickMoveLogin}>?????????</Div>
        )}
        <Div onClick={onClickMoveRegister}>????????????</Div>
        <Div>????????????</Div>
        <BasketCount>{basketsLength}</BasketCount>
        <Modal
          title="????????? ????????? ??????????????????"
          visible={isOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <button key="ok" type="primary" onClick={requestPay}>
              ????????????
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
      </Wrapper>
    </>
  );
}
