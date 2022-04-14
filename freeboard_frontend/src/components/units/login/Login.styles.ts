import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const HeaderWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 700;
`;

export const HeaderComments = styled.div`
  font-size: 15px;
`;

export const LoginInput = styled.input`
  border: 1px solid lightgray;
  background-color: white;
  margin-top: 10px;
  width: 250px;
  height: 40px;
  border-radius: 10px;
  color: black;
  padding-left: 10px;
`;

export const LoginButton = styled.button`
  border: 1px solid white;
  background-color: #4f4f4f;
  margin-bottom: 10px;
  margin-top: 20px;
  width: 250px;
  height: 40px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;

export const LoginOrDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  margin-bottom: 10px;
`;

export const LoginOrCenterLine = styled.div`
  border-bottom: 1px solid gray;
  width: 90px;
`;

export const KakaoLoginButton = styled.button`
  width: 250px;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 10px;
  border: 1px solid #fee500;
  background-color: #fee500;
  cursor: pointer;
  font-size: 13px;
`;
export const NaverLoginButton = styled.button`
  width: 250px;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 10px;
  border: 1px solid #19ce60;
  background-color: #19ce60;
  cursor: pointer;
  font-size: 13px;
`;
export const GoogleLoginButton = styled.button`
  width: 250px;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  background-color: white;
  cursor: pointer;
  box-shadow: 10%;
  font-size: 13px;
`;

export const LoginBottomMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  font-size: 10px;
`;

export const LoginBottomMenuButton = styled.button`
  display: flex;
  justify-content: center;
  width: 75px;
  height: 20px;
  background-color: white;
  border: 0px;
  cursor: pointer;
`;

export const LoginBottomMenuSideBar = styled.div`
  border-right: 1px solid gray;
  width: 5px;
  height: 10px;
  margin-bottom: 3px;
  margin-right: 5px;
  margin-left: 1.5px;
`;
