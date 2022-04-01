import styled from "@emotion/styled";

export const MyRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid gray;
`;

export const MyColumn = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  border-right: 1px solid gray;
`;

export const BoardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  align-items: center;
  border-left: 1px solid gray;
  border-top: 1px solid gray;
`;
