import styled from "@emotion/styled";

// 전체

export const Wrapper = styled.div`
  width: 1200px;
  height: auto;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: 50px auto;
  padding: 50px 100px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
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
  margin-bottom: 60px;
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
export const CreatedAt = styled.div``;
