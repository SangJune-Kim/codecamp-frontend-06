import styled from "@emotion/styled";

export const WrapperPageNation = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

export const PagePrevButton = styled.span`
  margin: 0 20px;
  cursor: pointer;
  display: ${(props) => (props.isPrevActive ? "y" : "none")};
`;

export const PageNextButton = styled.span`
  margin: 0 20px;
  cursor: pointer;
  display: ${(props) => (props.isNextActive ? "y" : "none")};
`;

export const PageNumber = styled.span`
  margin: 0 5px;
  cursor: pointer;
  color: ${(props) => (props.currentPage ? "orange" : "black")};
`;
