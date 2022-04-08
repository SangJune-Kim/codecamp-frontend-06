import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: auto;
  border: 1px solid white;
  padding: 30px 100px;
  margin: 20px auto;
  box-shadow: 0px 4px 20px;
`;

export const Header = styled.div`
  font-size: 36px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  padding-top: 20px;
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ProfileBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  /* height: auto; */
  padding-bottom: 30px;
`;
export const HeadText = styled.div`
  padding-bottom: 15px;
  padding-top: 10px;
`;

export const Writer = styled.input`
  width: 486px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;
export const Password = styled.input`
  width: 486px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
`;

export const HeadBox = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-bottom: 20px;
`;

export const ContentsBox = styled.textarea`
  width: 100%;
  height: 400px;
  border: 1px solid #bdbdbd;
`;

export const Address = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 220px;
`;
export const AddressNumber = styled.input`
  width: 100px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 5px;
  margin-right: 20px;
`;

export const AddressSearch = styled.button`
  width: 124px;
  height: 52px;
  background-color: black;
  border: 0px;
  color: white;
  font-size: small;
  cursor: pointer;
`;

export const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Picture = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  border: 0px;
  font-size: 12px;
`;

export const PictureBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 280px;
  justify-content: space-between;
  padding-bottom: 20px;
`;
export const SelectBox = styled.div`
  display: flex;
`;

export const Select = styled.input``;
export const SelectYoutube = styled.div`
  padding-right: 20px;
  width: 90px;
  display: flex;
  justify-content: space-between;
`;
export const SelectPicture = styled.div`
  padding-right: 30px;
  width: 90px;
  display: flex;
  justify-content: space-between;
`;

export const Register = styled.div`
  padding-top: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const RegisterButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: #ffd600;
  border: 0px;
  cursor: pointer;
`;

export const ErrorBox = styled.div`
  color: red;
  width: auto;
  height: 20px;
`;
