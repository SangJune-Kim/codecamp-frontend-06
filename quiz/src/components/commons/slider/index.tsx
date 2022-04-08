import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const Test = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const HelloImg = styled.img`
  width: 250px;
  height: 100px;
`;

const ByeImg = styled.img`
  width: 100px;
  height: 100px;
`;

export default function Component() {
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
          <Test>
            <HelloImg src="/img/Hello_yellow.png" />
          </Test>
        </div>
        <div>
          <Test>
            <ByeImg src="/img/goodBye.png" />
          </Test>
        </div>
      </Slider>
    </div>
  );
}
