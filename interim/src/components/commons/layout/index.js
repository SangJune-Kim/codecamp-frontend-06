// import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";

const Body = styled.div`
  width: 100%;
  height: 708px;
  /* background-color: black; */
`;

const Wrapper = styled.div`
  display: flex;
  width: 1024px;
  height: 760px;
  padding: 30px 20px;
  margin: 0 auto;
`;

export default function Layout(props) {
  return (
    <Wrapper>
      <LayoutNavigation />
      <Body>{props.children}</Body>
    </Wrapper>
  );
}
