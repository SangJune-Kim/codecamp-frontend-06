import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: 50px;
    font-weight: 900;
    margin: 0;
  }
  > h3 {
    font-size: 20px;
    margin-bottom: 30px;
    font-weight: 700;
  }
  > p {
    font-size: 20px;
    text-align: center;
  }
`;

export const ProfilePicture = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-image: url("/resume/profile.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 30px;
`;

export const NameUnderLine = styled.div`
  width: 255px;
  border-top: 6px solid #1e75b4;
  margin-bottom: 10px;
`;

// menu
export const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0 20px 0;
  border-top: 3px solid #d9d9d9;
  border-bottom: 3px solid #d9d9d9;
  margin-bottom: 30px;
  & span {
    font-size: 25px;
    font-weight: 500;
    cursor: pointer;
  }

  > span:first-of-type {
    margin-bottom: 5px;
  }
`;

// SNS
export const SNSWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  & > img {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`;
