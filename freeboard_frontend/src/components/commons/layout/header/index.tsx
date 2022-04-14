import styled from "@emotion/styled";
import { useRouter } from "next/router";

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

export default function LayoutHeader() {
  const router = useRouter();

  const onClickMoveHome = () => {
    router.push("/home/");
  };

  const onClickMoveLogin = () => {
    router.push("/login/");
  };
  const onClickMoveRegistration = () => {
    router.push("/login/");
  };
  return (
    <Wrapper>
      <HomeButton onClick={onClickMoveHome}>Walk</HomeButton>
      <div>
        <MoveLoginButton onClick={onClickMoveLogin}>로그인</MoveLoginButton>
        <MoveLoginButton onClick={onClickMoveRegistration}>
          회원가입
        </MoveLoginButton>
        <ProfileIcon src="/images/headerProfile.png" />
      </div>
    </Wrapper>
  );
}
