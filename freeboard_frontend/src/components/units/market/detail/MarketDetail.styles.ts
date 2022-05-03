import Icon, { HeartFilled, HeartOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

// 전체

export const Wrapper = styled.div`
  width: 1200px;
  height: auto;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: 0px auto;
  padding: 50px 100px;
  /* box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1); */
`;

// // page title부분
// export const PageTitle = styled.div`
//   font-size: 30px;
//   line-height: 50px;
//   text-align: center;
//   margin-bottom: 80px;
//   font-family: "NanumBarunGothicBold";
// `;

// 헤더 부분
export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  margin-bottom: 20px;
  padding-bottom: 20px;
`;

// 프로필 부분
export const Profile = styled.div``;

export const ProfileBox = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;
export const IconBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.img`
  margin-right: 20px;
`;
export const Writer = styled.div``;
export const CreatedAt = styled.div``;

// picked
export const ProductProfilePicked = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  /* width: 300px; */
`;
// export const PickHeart = styled(HeartFilled)`
//   margin-bottom: 10px;
//   cursor: pointer;
// `;

export const PickHeart = styled.img`
  margin-bottom: 10px;
  cursor: pointer;
`;

// 바디 부분
export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid gray;
  margin-bottom: 30px;
  padding-bottom: 30px;
`;

export const ProductProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductProfileDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductRemarks = styled.div`
  font-size: 15px;
  font-family: "NanumBarunGothicUltraLight";
  font-weight: 500;
  color: #bdbdbd;
  margin-bottom: 5px;
`;
export const ProductName = styled.div`
  font-size: 25px;
  font-weight: 700;
  /* margin-bottom: 5px; */
`;
export const ProductPrice = styled.div`
  font-size: 30px;
  font-family: "NanumBarunGothicBold";
  font-weight: 700;
  margin-bottom: 30px;
`;

export const ProductContents = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
  margin-bottom: 30px;
`;
export const ProductTags = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
`;

export const HashTagSpan = styled.span`
  background-color: #fee004;
  margin-right: 5px;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  color: white;
`;

// 이미지 부분
export const ProductImage = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  margin-bottom: 30px;
`;
export const UploadImage = styled.img`
  width: 320px;
  margin-right: 10px;
`;

// 지도 부분
export const MapWrapper = styled.div`
  width: 100%;
  height: auto;
  border-bottom: 1px solid gray;
  margin-bottom: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: black; */
`;

// 버튼 부분
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid gray;
  padding-bottom: 30px;
  margin-bottom: 30px;
`;

export const CommonsButton = styled.button`
  border: 1px solid #bdbdbd;
  background-color: #ffffff;
  width: 150px;
  height: 45px;
  margin-right: 20px;
  cursor: pointer;
`;
