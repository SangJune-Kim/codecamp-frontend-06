import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 764px;
  height: 648px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

// 전체 제목 부분
export const HeadWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 700;
  font-family: "SUIT-Bold";
`;

// 구분선
export const HeadLine = styled.div`
  width: 100%;
  border-bottom: 1px solid #6400ff;
  margin-bottom: 20px;
`;

// 각 컨텐츠 제목들
export const Titles = styled.div`
  color: #333333;
  width: 60px;
  height: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  margin-right: 20px;
  font-family: "SUIT-Bold";
`;

// 제목 부분
export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const TitleInput = styled.input`
  width: 604px;
  height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
`;

// 내용 부분
export const ContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
`;

export const ContentsInput = styled.textarea`
  width: 604px;
  height: 240px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
`;

// 이미지 부분
export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 20px;
`;

export const RealImgInput = styled.input`
  display: none;
`;

export const UploadImageBox = styled.div`
  width: 80px;
  height: 80px;
  background-color: #fafafa;
  border: 1px dashed #e5e5e5;
  border-radius: 5px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

// 작성자, 비밀번호 부분
export const BottomWrapper = styled.div`
  width: 100%;
  display: flex;

  justify-content: space-between;
`;

// 작성자
export const WriterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

// 비밀번호
export const PasswordWrapper = styled.div`
  display: flex;
  align-items: center;
`;

// 작성자, 비밀번호 공통 인풋
export const WriterInput = styled.input`
  width: 242px;
  height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
`;

export const PasswordInput = styled.input`
  width: 242px;
  height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
`;

// 등록 취소 버튼 부분
export const FooterWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 등록하기 버튼인데 나중에 등록하기 버튼 활성화 기능 넣게 되면 여기 수정
export const RegistrationButton = styled.button`
  width: 80px;
  height: 30px;
  background-color: #6400ff;
  /* background-color: #999999; */ //비활성화 색
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  border: 0px;
  border-radius: 30px;
  color: white;
  margin-right: 10px;
  font-size: 12px;
  font-weight: 700, bold;
  line-height: 20px;
  cursor: pointer;
`;
