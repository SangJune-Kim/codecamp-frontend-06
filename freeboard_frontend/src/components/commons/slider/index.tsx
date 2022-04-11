import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 300px;
  width: 100%;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
`;

const HelloImg = styled.img`
  width: 300px;
  height: 150px;
`;

const ByeImg = styled.img`
  width: 300px;
  height: 150px;
`;

export default function SliderComponent() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <ImgBox>
            <HelloImg src="/images/Hello_yellow.png" />
          </ImgBox>
        </div>
        <div>
          <ByeImg src="/images/goodBye.png" />
        </div>
      </Slider>
    </Wrapper>
  );
}
