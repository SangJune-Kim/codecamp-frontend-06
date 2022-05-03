import styled from "@emotion/styled";

// 전체
export const Wrapper = styled.div`
  width: 1200px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 50px 100px;
`;

// page title부분
export const PageTitle = styled.div`
  font-size: 30px;
  line-height: 50px;
  text-align: center;
  margin-bottom: 80px;
  font-family: "NanumBarunGothicBold";
`;

// 내부공통
export const CommonsInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 100%;
`;

export const CommonsInputTitle = styled.div`
  margin-bottom: 10px;
  font-size: 15px;
  line-height: 20px;
  /* font-family: "NanumBarunGothicBold"; */
`;

export const CommonsInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #bdbdbd;
  padding-left: 10px;
  /* transform: matrix(1, 0, 0, -1, 0, 0); */
`;

export const CommonsError = styled.div`
  color: red;
  font-size: 10px;
  word-break: break-all;
  width: 100%;
`;

// 해시태그
export const ProductTags = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  margin-bottom: 5px;
`;

export const HashTagSpan = styled.span`
  background-color: #fee004;
  margin-right: 5px;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  color: white;
`;

// 지도 전체
export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 30px;
`;

export const LocationMapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

// GPS && 상세주소 부분
export const LocationDetailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// GPS 부분
export const LocationGPSBox = styled.div``;

export const LocationGPSLatLng = styled.input`
  width: 135px;
  height: 40px;
  font-size: 13px;
  border: 1px solid #bdbdbd;
  margin-right: 10px;
  text-align: center;
`;

// 상세주소 부분
export const AddressSearchWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const AddressNumber = styled.input`
  width: 60px;
  height: 40px;
  border: 1px solid #bdbdbd;
  padding-left: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
`;
export const AddressSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  background-color: black;
  border: 0px;
  color: white;
  font-size: 13px;
  margin-bottom: 10px;
  cursor: pointer;
`;
export const LocationDetailAddressBox = styled.div`
  width: 100%;
`;

export const LocationDetailAddress = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #bdbdbd;
  margin-bottom: 10px;
  padding-left: 10px;
`;

// 사진 첨부 부분
export const ImageUploadWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const UploadImageBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

// 버튼 부분
export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: 0px;
  background-color: ${(props) => (props.isActive ? "#ffd600" : "none")};
  cursor: pointer;
`;
