import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  height: auto;
  margin: 50px 100px;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid gray;
`;

export const ColumnHeaderBasic = styled.div`
  width: 20%;
  text-align: center;
`;

export const ColumnHeaderContents = styled.div`
  width: 50%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 20%;
  text-align: center;
`;

export const ColumnContents = styled.div`
  width: 50%;
  text-align: center;
`;

export const PencilIcon = styled.img`
  margin-right: 10px;
`;

export const Button = styled.button`
  width: 170px;
  height: 50px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 20px;
`;
