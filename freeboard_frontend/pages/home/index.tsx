import styled from "@emotion/styled";
import BoardListPage from "../boards";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1050px;
`;

export default function HomePage() {
  return (
    <Container>
      <BoardListPage />
    </Container>
  );
}
