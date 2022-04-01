import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Component from "../../slider";

const Wrapper = styled.div`
  height: 200px;
  background-color: gray;
  display: flex;
  flex-direction: column;
`;

export default function LayoutBanner() {
  return (
    <Wrapper>
      <div>캐러셀로 백그라운드 이미지 넣고 앞에 글자랑 ㅇㅇ</div>
      <Component />
    </Wrapper>
  );
}
