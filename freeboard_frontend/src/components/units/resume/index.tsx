import styled from "@emotion/styled";
import Main from "./main/Main.container";
import Sidebar from "./sidebar/Sidebar.container";

const Container = styled.div`
  width: 1920px;
  height: 1080px;
  display: flex;
  font-size: 15px;
`;

const Resume = () => {
  return (
    <Container>
      <Sidebar />
      <Main />
    </Container>
  );
};
export default Resume;
