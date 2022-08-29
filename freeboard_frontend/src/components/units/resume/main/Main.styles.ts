import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1450px;
  height: 100%;
  padding: 100px;
`;

export const Wrapper = styled.div`
  width: 1100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 20px;

  > h1 {
    width: 1100px;
    font-size: 50px;
    padding-bottom: 15px;
    margin-bottom: 35px;
    border-bottom: 1px solid black;
  }
`;

export const Introduce = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border-bottom: 1px solid black;

  & p {
    font-size: 20px;
    font-weight: bold;
    :last-of-type {
      margin-bottom: 35px;
    }
  }
`;

export const Profile = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: column;
  font-size: 25px;
  margin-top: 15px;
  margin-bottom: 20px;
  border-bottom: 1px solid black;

  & span {
    font-size: 20px;
    :first-of-type {
      margin-top: 15px;
    }
    :last-of-type {
      margin-bottom: 30px;
    }
  }
`;

export const About = styled.div`
  width: 1100px;
`;
