import styled from "@emotion/styled/";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  background-image: url("/images/surfing.webp");
`;

export default function Home() {
  const router = useRouter();
  const onClickMoveHome = () => {
    router.push("/home/");
  };
  return (
    <Wrapper>
      <button onClick={onClickMoveHome}>홈으로</button>
      <div>랜딩 페이지</div>
      <div>랜딩 페이지</div>
      <div>랜딩 페이지</div>
      <div>랜딩 페이지</div>
    </Wrapper>
  );
}
