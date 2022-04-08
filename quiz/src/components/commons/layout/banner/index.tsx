import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Component from "../../slider";

const Wrapper = styled.div`
  height: 300px;
  background-color: pink;
  display: flex;
  flex-direction: column;
`;

export default function LayoutBanner() {
  return (
    <Wrapper>
      <div>배너 영역</div>
      <Component />
    </Wrapper>
  );
}
