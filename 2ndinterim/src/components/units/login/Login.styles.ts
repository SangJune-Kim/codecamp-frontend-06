import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin: 0 auto;
  padding: 30px 40px;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  border-bottom: 1px solid #c9c9c9c9;
`;
export const HeaderTitle = styled.div`
  font-size: 35px;
  font-weight: 700 bold;
  margin-right: 20px;
`;

export const HeaderComments = styled.div`
  font-size: 25px;
  margin-bottom: 5px;
`;
// 인풋
export const LoginInputWrapper = styled.div`
  width: 100%;
`;

export const LoginInput = styled.input`
  border: 1px solid #cccccc;
  background-color: #f6f6f6;
  margin-top: 20px;
  width: 100%;
  height: 70px;
  border-radius: 10px;
  color: black;
  padding-left: 30px;
  margin-bottom: 10px;
`;
// 에러
export const LoginErrorDiv = styled.div`
  width: 100%;
  height: 20px;
  padding-left: 10px;
  color: red;
`;

// 로그인 버튼
export const LoginButton = styled.button`
  border: 1px solid white;
  background-color: #4f4f4f;
  margin-bottom: 30px;
  margin-top: 50px;
  width: 100%;
  height: 70px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;

// 바텀
export const LoginBottomMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const LoginBottomComment = styled.div`
  font-size: 18px;
  margin-right: 10px;
`;

export const LoginBottomMenuButton = styled.div`
  width: 70px;
  background-color: white;
  /* border-bottom: 1px solid black; */
  text-decoration-line: underline;
  cursor: pointer;
  font-size: 18px;
`;
