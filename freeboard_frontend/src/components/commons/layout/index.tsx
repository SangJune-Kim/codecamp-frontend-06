import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const Body = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
`;

interface ILayoutProps {
  children: ReactNode;
}

const HIDDEN_HEADER = ["/"];
const HIDDEN_BANNER = [
  "/",
  "/login",
  "/register",
  "/markets/",
  "/markets/new",
  "/markets/useditemId",
  "/boards",
  "/firebaseBoards",
];
const HIDDEN_NAVIGATION = ["/", "/login", "/register"];

const Layout = (props: ILayoutProps) => {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);

  return (
    <div>
      {!isHiddenHeader && <LayoutHeader></LayoutHeader>}
      {!isHiddenBanner && <LayoutBanner></LayoutBanner>}
      {!isHiddenNavigation && <LayoutNavigation></LayoutNavigation>}
      <Body>{props.children}</Body>
    </div>
  );
};
export default Layout;
