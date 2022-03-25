//목록 스타일즈 페이지

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 30px 100px;
  margin: 20px auto;
`;

export const ListWrapper = styled.div`
  width: 1200px;
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
  justify-content: flex-end;
  align-items: center;
`;

export const PageNumber = styled.div`
  margin-right: 373px;
`;

export const BeforeNextIcon = styled.img`
  margin-left: 30px;
  margin-right: 30px;
`;

export const PencilIcon = styled.img`
  margin-right: 10px;
`;

export const CreateNewBoardButton = styled.button`
  border: 1px solid #bdbdbd;
  background-color: #ffffff;
  width: 175px;
  height: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
