import styled from "@emotion/styled/";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: auto;
  margin-bottom: auto;
`;

export default function Home() {
  return (
    <Wrapper>
      <div></div>
      <div>랜딩 페이지</div>
      <div>랜딩 페이지</div>
      <div>랜딩 페이지</div>
      <div>랜딩 페이지</div>
    </Wrapper>
  );
}
