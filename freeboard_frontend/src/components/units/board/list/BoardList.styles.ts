// 목록 스타일즈 페이지

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 100px;
  margin: 20px auto;
`;

export const BestBoardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchBox = styled.div`
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  height: 40px;
  width: 700px;
  border-radius: 10px;
`;

export const SearchImg = styled.img`
  margin-left: 10px;
`;

export const SearchInput = styled.input`
  background-color: #f2f2f2;
  border: 0px;
  margin-left: 10px;
  width: 650px;
`;

export const SearchDate = styled.input`
  border: 1px solid #bdbdbd;
  background-color: white;
  height: 40px;
  width: 300px;
  border-radius: 10px;
  padding: 5px 60px;
`;

export const SearchButton = styled.button`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;

export const ListWrapper = styled.div`
  width: 100%;
  border-bottom: 2px solid black;
  margin-bottom: 20px;
`;

export const ListTop = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;
  border-top: 2px solid black;
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
  cursor: pointer;
`;

export const ListTitleKeyWord = styled.span`
  color: ${(props) => (props.isMatched ? "blue" : "black")};
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

export const PageNumber = styled.div`
  display: flex;
  align-items: center;
`;

export const PencilIcon = styled.img`
  margin-right: 10px;
`;

export const CreateNewBoardButton = styled.button`
  border: 1px solid #bdbdbd;
  background-color: #ffffff;
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
