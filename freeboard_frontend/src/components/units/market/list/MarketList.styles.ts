// 마켓 리스트 스타일

import styled from "@emotion/styled";

// 전체
export const Wrapper = styled.div`
  width: 100%;
  margin: 20px auto;
`;

// 리스트

export const MarketListWrapper = styled.div`
  width: 1200px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

// 리스트 메뉴
export const ListMenuWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0px 20px;
`;
export const ChoiceShow = styled.div`
  display: flex;
  align-items: center;
`;
export const ShowSelling = styled.div`
  margin-right: 20px;
  cursor: pointer;
`;
export const ShowSoldout = styled.div`
  margin-right: 20px;
  cursor: pointer;
`;
export const MoveToNewItem = styled.button`
  width: 80px;
  height: 30px;
  border: 1px solid #bdbdbd;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
`;

// 리스트 메뉴 검색
export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchDate = styled.div`
  margin-right: 20px;
`;

export const SearchBox = styled.div`
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  height: 30px;
  width: 400px;
  border-radius: 10px;
  margin-right: 20px;
`;

export const SearchImg = styled.img`
  margin-left: 10px;
  margin-right: 10px;
`;

export const SearchInput = styled.input`
  margin-right: 20px;
  background-color: #f2f2f2;
  /* border-radius: 10px; */
  border: 0px;
  width: 370px;
  height: 30px;
`;

export const SearchButton = styled.button`
  width: 80px;
  border: 1px solid #bdbdbd;
  background-color: white;
  border-radius: 10px;
  height: 30px;
  cursor: pointer;
`;

// 상품 리스트

export const ItemListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ItemListRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #bdbdbd;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const ItemInfo = styled.div`
  display: flex;
`;

export const ItemPicture = styled.img`
  width: 160px;
  height: 160px;
  margin-right: 10px;
`;

// 아이템 디테일
export const ItemListDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

export const ItemListDetailName = styled.div`
  font-size: 24px;
  font-weight: 500;
  /* margin-bottom: 5px; */
  cursor: pointer;
`;

export const ItemListDetailRemarks = styled.div`
  font-size: 16px;
  font-weight: 500;
  /* margin-bottom: 5px; */
`;

export const ItemListDetailTags = styled.div`
  font-size: 16px;
  font-weight: 500;
  /* margin-bottom: 5px; */
  color: #bdbdbd;
`;

// 이름, 픽, 아이콘
export const ItemListDetailBottom = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemListDetailSellerIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const ItemListDetailSeller = styled.div`
  margin-right: 30px;
`;

export const ItemListDetailPickedIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const ItemListDetailPickedCount = styled.div``;

// 가격 따로

export const WonIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  margin-bottom: 2px;
`;

export const ItemListPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "NanumBarunGothicBold";
  font-size: 24px;
  font-weight: 700;
  /* margin-bottom: 5px; */
`;

// 베스트 상품
export const BestListWrapper = styled.div`
  padding: 0px 20px;
`;

// 오늘 본 상품
export const TodayListWrapper = styled.div``;
