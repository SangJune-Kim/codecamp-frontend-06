import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 135px;
  height: 350px;
  top: 250px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  border: 1px solid #bdbdbd;
  padding: 0 10px;
  overflow: scroll;
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 17px;
`;

export const TodaysWrapper = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
`;

export const TodaysImage = styled.img`
  width: 100%;
  height: 100px;
  background-color: black;
`;
