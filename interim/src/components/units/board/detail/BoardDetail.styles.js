import styled from "@emotion/styled";

// 리스트 페이지 전체 부분
export const Wrapper = styled.div`
  width: 764px;
  height: 708px;
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

// 캐러셀 밑 상세페이지
export const DetailWrapper = styled.div`
  width: 762px;
  height: 388px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

// 글 제목 부분
export const HeadWrapper = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 700;
  font-family: "SUIT-Bold";
`;

export const DetailLine = styled.div`
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 20px;
`;

// 이미지 업로드 부분
export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const UploadImage = styled.img`
  width: 220px;
  height: 125px;
  margin-right: 10px;
  border: 0px;
`;

// 작성자 명, 게시글 부분
export const WriterContentsWrapper = styled.div`
  display: flex;
`;

// 프로필 부분
export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 35px;
  font-weight: 700;
  font-family: "SUIT-BOLD";
  font-size: 14px;
  line-height: 20px;
`;

export const ProfileImage = styled.img`
  margin-right: 10px;
`;

// 게시글 부분
export const BoardContents = styled.div`
  font-size: 15px;
  line-height: 23px;
  font-weight: 400;
`;

// 상세 밑 버튼 부분
export const FooterWrapper = styled.div`
  width: 762px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 버튼인데 나중에 버튼 활성화 기능 넣게 되면 여기 수정
export const FooterButton = styled.button`
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
