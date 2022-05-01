import styled from "@emotion/styled";

// 전체

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

// 헤더 부분
export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  padding-bottom: 20px;
`;

// 이미지 부분
export const ProductImage = styled.div`
  height: auto;
  margin-right: 50px;
`;
export const UploadImage = styled.img`
  width: 450px;
`;

// 이미지 우측 상품 정보
export const ProductProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;
export const ProductProfileDetail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
`;

export const ProductName = styled.div`
  font-size: 25px;
  font-weight: 700 bold;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

// 수정하기 삭제하기 버튼
export const UpdateIcon = styled.img`
  cursor: pointer;
`;

export const DeleteIcon = styled.img`
  margin-left: 20px;
  cursor: pointer;
`;

export const ProductPrice = styled.div`
  font-size: 40px;
  font-weight: 700;
`;
export const ProductRemarks = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 20px;
`;
export const ProductTags = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;

export const HashTagSpan = styled.span`
  background-color: #fee004;
  margin-right: 5px;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
`;

// 상품 찜, 장바구니 바로구매 부분
export const ProductButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
// picked
export const ProductProfilePicked = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  width: 100px;
  height: 50px;
  /* border: 1px solid #bdbdbd;
  border-radius: 10px; */
`;

export const PickHeart = styled.img`
  /* margin-bottom: 10px; */
  margin-right: 10px;
  cursor: pointer;
`;

export const ProductMoveToBasket = styled.button`
  width: 200px;
  height: 50px;
  border: 1px solid #bdbdbd;
  border-radius: 20px;
  background-color: #bdbdbd;
  color: white;
  cursor: pointer;
`;
export const ProductBuy = styled.button`
  width: 200px;
  height: 50px;
  border: 1px solid #bdbdbd;
  border-radius: 20px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

// ------------------------------------------

// 바디 부분
export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

// 공통 타이틀 부분
export const CommonsTitle = styled.div`
  font-size: 25px;
  width: 100%;
  border-bottom: 1px solid black;
`;

// 상품 정보 부분
export const ProductContentsMapWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid black;
  padding-right: 20px;
`;

export const ProductContents = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  line-height: 25px;
  margin-bottom: 10px;
  padding: 20px;
`;
export const MapTitleBox = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const MapTitleIcon = styled.img`
  margin-right: 10px;
`;
export const MapTitle = styled.div`
  font-size: 20px;
`;
// 지도 부분
export const MapWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 상점&댓글 정보
export const ProfileCommentsWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;
// 프로필 부분
export const ProfileBox = styled.div`
  display: flex;
  margin-bottom: 50px;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #bdbdbd;
`;

export const ProfileImg = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 20px;
  background-color: gray;
`;
export const Writer = styled.div`
  font-size: 28px;
`;

// 댓글
export const CommentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
