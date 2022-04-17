import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 240px;
  width: 100%;
  padding-left: 50px;
  padding-right: 50px;
`;

const ContentsBox = styled.div`
  margin: 0px auto;
  width: 100%;
  height: 100%;
`;
const Contents1 = styled.div`
  height: 200px;
  background-color: #6400ff;
`;
const Contents2 = styled.div`
  height: 200px;
  background-color: #999999;
`;
export default function SliderComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <ContentsBox>
          <Contents1></Contents1>
        </ContentsBox>
        <ContentsBox>
          <Contents2></Contents2>
        </ContentsBox>
      </Slider>
    </Wrapper>
  );
}
