import styled from "@emotion/styled";

export const WrapperPageNation = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PagePrevButton = styled.span`
  width: 10%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border: 0px;
  background-color: white;
  color: ${(props) => (props.isPrevActive ? "black" : "white")};
`;

export const PageNextButton = styled.span`
  display: flex;
  justify-content: center;
  width: 10%;
  cursor: pointer;
  border: 0px;
  background-color: white;
  display: ${(props) => (props.isNextActive ? "y" : "none")};
`;

export const PageNumber = styled.span`
  display: flex;
  justify-content: center;
  width: 8%;
  font-size: 15px;
  cursor: pointer;
  color: ${(props) => (props.currentPage ? "orange" : "black")};
  font-weight: ${(props) => (props.currentPage ? "bold" : "normal")};
`;
