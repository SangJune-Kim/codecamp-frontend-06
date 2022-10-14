import styled from "@emotion/styled";

// 전체
export const Wrapper = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin: 0 auto;
`;

export const HeaderWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 700;
`;

// 공통부분
export const ProfileInput = styled.input`
  border: 1px solid lightgray;
  background-color: white;
  width: 250px;
  height: 40px;
  border-radius: 10px;
  color: black;
  padding-left: 10px;
`;

export const ProfileError = styled.div`
  color: red;
  font-size: 10px;
  word-break: break-all;
  width: 170px;
`;

// 필수 구역
export const NecessaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
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
export const PhoneCheckBox = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: column;
`;
export const PhoneCheckValidation = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 20px;
  width: 300px;
`;
export const PhoneCheckButton = styled.button`
  border: 1px solid white;
  background-color: #4f4f4f;
  width: 120px;
  height: 40px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  margin-right: 10px;
`;
export const PhoneCheckInput = styled.input`
  border: 1px solid lightgray;
  background-color: white;
  width: 120px;
  height: 40px;
  border-radius: 10px;
  color: black;
  padding-left: 10px;
`;

// 회원가입 버튼

export const RegisterButton = styled.button`
  border: 1px solid white;
  background-color: ${(props) => (props.isActive ? "#4f4f4f" : "none")};
  margin-bottom: 10px;
  margin-top: 20px;
  width: 250px;
  height: 40px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  border: 1px solid white;
  background-color: black;
  width: 250px;
  height: 40px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;
