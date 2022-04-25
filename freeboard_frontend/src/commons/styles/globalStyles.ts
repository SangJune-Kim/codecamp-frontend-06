import { css } from "@emotion/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 15px;
    font-family: "NanumBarunGothic";
  }
  @font-face {
    font-family: "NanumBarunGothic";
    src: url("/fonts/NanumBarunGothic.ttf");
  }
  @font-face {
    font-family: "NanumBarunGothicBold";
    src: url("/fonts/NanumBarunGothicBold.ttf");
  }
  @font-face {
    font-family: "NanumBarunGothicLight";
    src: url("/fonts/NanumBarunGothicLight.ttf");
  }
  @font-face {
    font-family: "NanumBarunGothicUltraLight";
    src: url("/fonts/NanumBarunGothicUltraLight.ttf");
  }
  @font-face {
    font-family: "NanumPen";
    src: url("/fonts/NanumPen.ttf");
  }
`;
