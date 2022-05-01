import styled from "@emotion/styled";
import { ReactNode } from "react";
import LayoutBanner from "./banner";
import LayoutHeader from "./header";

const Body = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 150px;
  padding-bottom: 30px;
  margin-top: 30px;
`;
interface ILayoutProps {
  children: ReactNode;
}
const Layout = (props: ILayoutProps) => {
  return (
    <div>
      <LayoutHeader></LayoutHeader>
      <LayoutBanner></LayoutBanner>
      <Body>{props.children}</Body>
    </div>
  );
};
export default Layout;
