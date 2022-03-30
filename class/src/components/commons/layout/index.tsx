import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import LayoutFooter from "./footer";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const BodyWrapper = styled.div`
  display: flex;
`;

const Body = styled.div`
  height: 500px;
`;

const LayoutSidebar = styled.div`
  height: 500px;
  width: 100px;
  background-color: orange;
`;

interface ILayoutProps {
  children: ReactNode;
}

const HIDDEN_HEADERS = ["/12-05-modal-refactoring"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHidden = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {!isHidden && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <BodyWrapper>
        <LayoutSidebar>여기는 사이드바입니다.</LayoutSidebar>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <LayoutFooter />
    </>
  );
}
