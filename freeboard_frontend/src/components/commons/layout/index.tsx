import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import LayoutFooter from "./footer";

const Body = styled.div`
  width: 100%;
  /* padding-bottom: 20px; */
`;

interface ILayoutProps {
  children: ReactNode;
}

const HIDDEN_HEADER = ["/"];
const HIDDEN_BANNER = [
  "/",
  "/login",
  "/register",
  "/markets",
  "/markets/new",
  "/markets/[useditemId]",
  "/boards",
  "/firebaseBoards",
];
const HIDDEN_NAVIGATION = ["/", "/login", "/register"];
const HIDDEN_FOOTER = ["/"];

const Layout = (props: ILayoutProps) => {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.pathname);
  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);
  return (
    <div>
      {!isHiddenHeader && <LayoutHeader></LayoutHeader>}
      {!isHiddenBanner && <LayoutBanner></LayoutBanner>}
      {!isHiddenNavigation && <LayoutNavigation></LayoutNavigation>}
      <Body>{props.children}</Body>
      {!isHiddenFooter && <LayoutFooter />}
    </div>
  );
};
export default Layout;
