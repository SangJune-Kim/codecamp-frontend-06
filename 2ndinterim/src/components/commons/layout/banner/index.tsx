import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 150px;
  border-bottom: 1px solid black;
`;

const Logo = styled.img`
  width: 250px;
  cursor: pointer;
`;

// 판매하기
const Sell = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
`;

const SellIcon = styled.img`
  width: 20px;
  margin-right: 10px;
  margin-bottom: 5px;
`;

export default function LayoutBanner() {
  const router = useRouter();
  const onClickMoveMarketNew = () => {
    router.push("/markets/new");
  };
  const onClickMoveHome = () => {
    router.push("/");
  };
  return (
    <Wrapper>
      <Logo src="/images/logo 1.png" onClick={onClickMoveHome} />
      <Sell onClick={onClickMoveMarketNew}>
        <SellIcon src="/images/sell 1.png" /> 판매하기
      </Sell>
    </Wrapper>
  );
}
