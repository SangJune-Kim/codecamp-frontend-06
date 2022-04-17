import { css } from "@emotion/react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 15px;
    font-family: "myfont", "SUIT-ExtraBold", "SUIT-Bold";
  }
  @font-face {
    font-family: "myfont";
    src: url("/fonts/SUIT-ttf/SUIT-Regular.ttf");
  }
  @font-face {
    font-family: "SUIT-ExtraBold";
    src: url("/fonts/SUIT-ttf/SUIT-ExtraBold.ttf");
  }
  @font-face {
    font-family: "SUIT-Bold";
    src: url("/fonts/SUIT-ttf/SUIT-Bold.ttf");
  }
`;
