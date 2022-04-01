import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";

const Body = styled.div`
  width: 100%;
  height: 100%;
`;

const Layout = (props) => {
  return (
    <div>
      <LayoutHeader></LayoutHeader>
      <LayoutBanner></LayoutBanner>
      <LayoutNavigation></LayoutNavigation>
      <Body>{props.children}</Body>
    </div>
  );
};
export default Layout;
