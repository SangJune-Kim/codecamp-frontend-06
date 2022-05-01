import styled from "@emotion/styled";

// 전체
export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid black;
  margin-bottom: 30px;
`;

// 헤드 타이틀 부분
export const HeadWrapper = styled.div`
  font-size: 30px;
  font-weight: 400 bold;
  border-bottom: 2px solid black;
  padding-bottom: 20px;
  margin-bottom: 30px;
`;

// 공통 가로 div
export const CommonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

// 공통 타이틀 부분
export const CommonsTitle = styled.div`
  font-size: 20px;
`;

// 공통 인풋
export const CommonsInput = styled.input`
  width: 900px;
  height: 40px;
  border: 0px;
  background-color: #e9e9e9;
  padding-left: 10px;
`;
export const CommonsError = styled.div`
  color: red;
  font-size: 10px;
  word-break: break-all;
  width: 900px;
  height: 40px;
`;

// hashArr 부분
export const HashArrBox = styled.div`
  width: 900px;
  height: 40px;
`;

export const HashTagSpan = styled.span`
  background-color: #fee004;
  margin-right: 5px;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
`;

// 지도 부분
export const MapWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Map = styled.div`
  width: 40%;
  height: 300px;
  background-color: black;
`;

// 주소 인풋 부분
export const MapDetailWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
`;

export const MapDetailWrapperHead = styled.div`
  display: flex;
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

export const MapDetailWrapperBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const MapDetailAddress = styled.input`
  width: 100%;
  height: 40px;
  border: 0px;
  margin-top: 10px;
  padding-left: 10px;
  background-color: #e9e9e9;
`;

// 사진 첨부
export const ImageUploadWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const UploadImageBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
`;

// 버튼 부분
export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const CancelButton = styled.button`
  width: 150px;
  height: 52px;
  border: 0px;
  background-color: #ffe004;
  cursor: pointer;
  margin-right: 20px;
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 52px;
  border: 0px;
  background-color: ${(props) => (props.isActive ? "black" : "noe")};
  color: white;
  cursor: pointer;
`;
