import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const Body = styled.div`
  width: 100%;
  height: 100%;
`;

interface ILayoutProps {
  children: ReactNode;
}

const HIDDEN_PAGE = ["/"];

const Layout = (props: ILayoutProps) => {
  const router = useRouter();
  const isHidden = HIDDEN_PAGE.includes(router.asPath);
  return (
    <div>
      <LayoutHeader></LayoutHeader>
      {!isHidden && <LayoutBanner></LayoutBanner>}
      {!isHidden && <LayoutNavigation></LayoutNavigation>}
      <Body>{props.children}</Body>
    </div>
  );
};
export default Layout;
