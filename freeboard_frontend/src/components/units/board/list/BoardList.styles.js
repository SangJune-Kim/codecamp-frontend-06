// 목록 스타일즈 페이지

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 100px;
  margin: 20px auto;
`;

export const ListWrapper = styled.div`
  width: 100%;
  height: auto;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  margin-bottom: 50px;
`;

export const ListTop = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;
`;

export const ListRow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-top: 1px solid gray;
  padding: 10px 0;
`;

export const ListNumber = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
`;

export const ListTitle = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const ListWriter = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
`;

export const ListCreatedAt = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const PageNumber = styled.div``;

export const PencilIcon = styled.img`
  margin-right: 10px;
`;

export const CreateNewBoardButton = styled.button`
  border: 1px solid #bdbdbd;
  background-color: #ffffff;
  width: 180px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
