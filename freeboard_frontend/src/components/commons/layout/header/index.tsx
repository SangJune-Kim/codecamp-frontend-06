import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  basketsLengthState,
} from "../../../../commons/store";
import Payment from "../../payment/Payment.container";

const Wrapper = styled.div`
  height: 100px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomeButton = styled.button`
  color: #ffd600;
  margin-right: 10px;
  margin-left: 50px;
  font-size: 60px;
  font-family: "NanumPen";
  border: 0px;
  background-color: white;
  cursor: pointer;
`;

const LoggedInProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProfileIcon = styled.img`
  height: 48px;
  width: 48px;
  margin-right: 50px;
  margin-left: 50px;
`;

const MoveLoginButton = styled.button`
  background-color: white;
  border: 0px;
  cursor: pointer;
  margin-right: 20px;
`;

// 로그인 후 포인트 부분
const UserNameBox = styled.span`
  margin-right: 10px;
`;

const PointBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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

// gql
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

export default function LayoutHeader() {
  const router = useRouter();
  const [basketsLength] = useRecoilState(basketsLengthState);
  const [accessToken] = useRecoilState(accessTokenState);

  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const onClickMoveHome = () => {
    router.push("/home/");
  };

  const onClickMoveLogin = () => {
    router.push("/login/");
  };
  const onClickMoveRegister = () => {
    router.push("/register/");
  };

  return (
    <Wrapper>
      <HomeButton onClick={onClickMoveHome}>Walk</HomeButton>
      <LoggedInProfile>
        {accessToken ? (
          <PointBox>
            <UserNameBox> {data?.fetchUserLoggedIn.name}님</UserNameBox>
            <span>{data?.fetchUserLoggedIn?.userPoint?.amount} 포인트</span>
            <Payment />
          </PointBox>
        ) : (
          <MoveLoginButton onClick={onClickMoveLogin}>로그인</MoveLoginButton>
        )}
        <MoveLoginButton onClick={onClickMoveRegister}>
          회원가입
        </MoveLoginButton>
        <span>장바구니</span>
        <BasketCount>{basketsLength}</BasketCount>
        <ProfileIcon src="/images/headerProfile.png" />
      </LoggedInProfile>
    </Wrapper>
  );
}
