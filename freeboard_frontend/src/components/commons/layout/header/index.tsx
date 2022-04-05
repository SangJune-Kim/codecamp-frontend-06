import { HomeFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  height: 120px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomeIcon = styled(HomeFilled)`
  color: #ffd600;
  margin-right: 10px;
  margin-left: 50px;
`;

const ProfileIcon = styled.img`
  height: 48px;
  width: 48px;
  margin-right: 50px;
`;

export default function LayoutHeader() {
  const router = useRouter();

  const onClickMoveHome = () => {
    router.push("/");
  };

  return (
    <Wrapper>
      <HomeIcon onClick={onClickMoveHome} />
      <ProfileIcon src="/images/headerProfile.png" />
    </Wrapper>
  );
}
