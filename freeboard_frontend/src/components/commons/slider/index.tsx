import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 300px;
  width: 100%;
  background-color: black;
  padding-left: 50px;
  padding-right: 50px;
`;

const ImgBox = styled.div`
  margin: 0px auto;
  width: 100%;
  height: 100%;
`;

const HelloImg = styled.img`
  width: 300px;
  height: 150px;
  margin: 50px auto;
`;

const ByeImg = styled.img`
  width: 300px;
  height: 150px;
  margin: 50px auto;
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
        <ImgBox>
          <HelloImg src="/images/Hello_yellow.png" />
        </ImgBox>
        <ImgBox>
          <ByeImg src="/images/come-in.png" />
        </ImgBox>
      </Slider>
    </Wrapper>
  );
}
