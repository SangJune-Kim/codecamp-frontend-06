import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import LayoutFooter from "./footer";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import LayoutSidebar from "./sidebar";

const BodyWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Body = styled.div`
  width: 100%;
  height: 600px;
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
        <LayoutSidebar />
        <Body>{props.children}</Body>
      </BodyWrapper>
      <LayoutFooter />
    </>
  );
}
