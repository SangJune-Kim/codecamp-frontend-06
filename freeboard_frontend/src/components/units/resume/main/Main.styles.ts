import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1450px;
  height: 100%;
  padding: 100px;
`;

export const Wrapper = styled.div`
  width: 1350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 20px;

  > h1 {
    width: 1100px;
    font-size: 50px;
    padding-bottom: 15px;
    margin-bottom: 50px;
    border-bottom: 1px solid black;
  }
`;

export const Introduce = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  > p {
    font-size: 20px;
  }
`;

export const Profile = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 25px;
`;
