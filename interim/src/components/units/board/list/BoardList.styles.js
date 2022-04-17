import styled from "@emotion/styled";

// 리스트 페이지 전체 부분
export const Wrapper = styled.div`
  width: 764px;
  height: 708px;
  /* box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  padding: 40px;
  display: flex;
  flex-direction: column; */
`;

// 리스트 캐러셀 부분
export const CarouselWrapper = styled.div`
  width: 762px;
  height: 240px;
  border: 4px solid #ffffff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin-bottom: 20px;
`;

// 리스트 부분
export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 446px;
  overflow: auto;
`;

export const ListRow = styled.div`
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  width: 100%;
  height: 10%;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListTitle = styled.div`
  font-family: "SUIT-Bold";
  font-size: 14px;
  font-weight: 700;
  margin-top: 5px;
  cursor: pointer;
`;

export const ListCreatedAt = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-top: 5px;
  color: #999999;
`;
