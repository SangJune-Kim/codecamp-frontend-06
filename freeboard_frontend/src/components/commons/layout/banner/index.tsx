import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComponent from "../../slider/banner";

const Wrapper = styled.div`
  height: 300px;
  background-color: #f2f1eb;
`;

export default function LayoutBanner() {
  return (
    <Wrapper>
      <SliderComponent />
    </Wrapper>
  );
}
