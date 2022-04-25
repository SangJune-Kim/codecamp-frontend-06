import styled from "@emotion/styled";
import { useRouter } from "next/router";
const Wrapper = styled.div`
  height: 50px;
  background-color: #ffd600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavigationButton = styled.button`
  border: 0px;
  /* border-bottom: 0px;
  border-left: 1px solid white;
  border-right: 1px solid white; */
  margin-right: 20px;
  margin-left: 25px;
  background-color: #ffd600;
  cursor: pointer;
`;

const NavigationBar = styled.div`
  border-right: 3px solid white;
  height: 20px;
  width: 5px;
`;

export default function LayoutNavigation() {
  const router = useRouter();

  const onClickMoveHome = () => {
    router.push("/");
  };

  const onClickMoveBoards = () => {
    router.push("/boards");
  };

  const onClickMoveFirebaseBoard = () => {
    router.push("/firebaseBoards/");
  };

  const onClickMoveMarket = () => {
    router.push("/markets/");
  };

  return (
    <Wrapper>
      <NavigationButton onClick={onClickMoveHome}>HOME </NavigationButton>
      <NavigationBar></NavigationBar>
      <NavigationButton onClick={onClickMoveMarket}>중고마켓</NavigationButton>
      <NavigationBar></NavigationBar>
      <NavigationButton onClick={onClickMoveBoards}>게시판</NavigationButton>
      <NavigationBar></NavigationBar>
      <NavigationButton onClick={onClickMoveFirebaseBoard}>
        파이어베이스 게시판
      </NavigationButton>
    </Wrapper>
  );
}
