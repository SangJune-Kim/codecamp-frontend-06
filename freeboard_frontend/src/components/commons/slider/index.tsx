import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const SliderImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
    <div>
      <Slider {...settings}>
        <div>
          <SliderImg>
            <HelloImg src="/images/Hello_yellow.png" />
          </SliderImg>
        </div>
        <div>
          <SliderImg>
            <ByeImg src="/images/goodBye.png" />
          </SliderImg>
        </div>
      </Slider>
    </div>
  );
}
