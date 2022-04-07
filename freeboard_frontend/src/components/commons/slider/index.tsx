import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const SliderWrapper = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const SliderImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const HelloImg = styled.img`
  width: 300px;
  height: 150px;
`;

const ByeImg = styled.img`
  width: 200px;
  height: 150px;
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
    <SliderWrapper>
      <Slider {...settings}>
        <div>
          <SliderImgBox>
            <HelloImg src="/images/Hello_yellow.png" />
          </SliderImgBox>
        </div>
        <div>
          <SliderImgBox>
            <ByeImg src="/images/goodBye.png" />
          </SliderImgBox>
        </div>
      </Slider>
    </SliderWrapper>
  );
}
