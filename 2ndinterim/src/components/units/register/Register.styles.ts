import styled from "@emotion/styled";

// 전체
export const Wrapper = styled.div`
  width: 100%;
  height: 600px;
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
// 공통부분
export const ProfileInput = styled.input`
  border: 1px solid lightgray;
  background-color: white;
  width: 600px;
  height: 40px;
  border-radius: 10px;
  color: black;
  padding-left: 10px;
`;

export const ProfileError = styled.div`
  color: red;
  font-size: 10px;
  word-break: break-all;
  width: 600px;
  margin-bottom: 10px;
`;

// 필수 구역
export const NecessaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin-bottom: 10px;
`;

export const InputTitle = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
`;

export const EmailBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
`;
export const PasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
`;

// 회원가입 버튼

export const RegisterButton = styled.button`
  border: 1px solid white;
  background-color: ${(props) => (props.isActive ? "#4f4f4f" : "none")};
  margin-bottom: 10px;
  margin-top: 20px;
  width: 600px;
  height: 40px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;
