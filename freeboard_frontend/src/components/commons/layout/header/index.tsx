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
`;

export default function LayoutHeader() {
  const router = useRouter();

  const onClickMoveHome = () => {
    router.push("/home/");
  };

  return (
    <Wrapper>
      <HomeButton onClick={onClickMoveHome}>Walk</HomeButton>
      <ProfileIcon src="/images/headerProfile.png" />
    </Wrapper>
  );
}
