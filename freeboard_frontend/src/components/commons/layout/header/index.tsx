import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";

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
  const onClickMoveRegister = () => {
    router.push("/register/");
  };
  const [accessToken] = useRecoilState(accessTokenState);

  return (
    <Wrapper>
      <HomeButton onClick={onClickMoveHome}>Walk</HomeButton>
      <div>
        {accessToken ? (
          <div></div>
        ) : (
          <MoveLoginButton onClick={onClickMoveLogin}>로그인</MoveLoginButton>
        )}
        <MoveLoginButton onClick={onClickMoveRegister}>
          회원가입
        </MoveLoginButton>
        <ProfileIcon src="/images/headerProfile.png" />
      </div>
    </Wrapper>
  );
}
