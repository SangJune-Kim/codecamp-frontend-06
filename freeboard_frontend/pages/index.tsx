import styled from "@emotion/styled/";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default function Home() {
  return (
    <Wrapper>
      <div>랜딩 페이지</div>
      <div>랜딩 페이지</div>
      <div>랜딩 페이지</div>
      <div>랜딩 페이지</div>
      <div>랜딩 페이지</div>
    </Wrapper>
  );
}
