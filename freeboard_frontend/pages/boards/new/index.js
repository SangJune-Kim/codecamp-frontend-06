import { useState } from "react";
import {
  Box,
  Head,
  Header,
  HeaderBox,
  ProfileBox,
  PasswordBox,
  HeadText,
  Wrapper,
  HeadBox,
  ContentsBox,
  AddressNumber,
  AddressSearch,
  Address,
  BottomBox,
  Picture,
  PictureBox,
  Select,
  SelectYoutube,
  SelectPicture,
  SelectBox,
  Register,
  RegisterButton,
  ErrorBox,
} from "../../../styles/NewBoards";

export default function NewBoards() {
  // 여기는 자바스크립트 쓰는 곳//
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState("");
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [content, setContent] = useState("");
  const [contentError, setContentError] = useState("");

  const onChangeName = (event) => {
    setName(event.target.value);
    if (event.target.value === "") {
      setNameError("작성자를 작성하세요.");
    } else {
      setNameError("");
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value === "") {
      setPasswordError("비밀번호를 입력하세요.");
    // } if(event.target.value !== passwordCheck){
      // setPasswordCheckError("비밀번호를 확인하세요")
    }
    else {
      setPasswordError("");
    }
  };

  const onChangePasswordCheck = (event) => {
    setPasswordCheck(event.target.value);
    if (event.target.value === "") {
      setPasswordCheckError("비밀번호를 한번 더 입력하세요.");
    // } if(event.target.value !== password){
      // setPasswordCheckError("비밀번호가 안맞잖슴!");
    }
    else {
      setPasswordCheckError("");
    } 
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value === "") {
      setTitleError("제목을 작성하세요.");
    } else {
      setTitleError("");
    }
  };

  const onChangeContent = (event) => {
    setContent(event.target.value);
    if (event.target.value === "") {
      setContentError("내용을 작성하세요.");
    } else {
      setContentError("");
    }
  };

  const handleRegister = () => {
    if (name === "") {
      setNameError("작성자를 입력하세요.");
    } else {
      setNameError("");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력하세요.");
    } else {
      setPasswordError("");
    }
    if (passwordCheck === "") {
      setPasswordCheckError("비밀번호를 한번 더 입력하세요.");
    } else {
      setPasswordCheckError("");
    }
    if (passwordCheck !== password) {
      setPasswordCheckError("비밀번호가 일치하지 않습니다.");
    }
    if (title === "") {
      setTitleError("제목을 입력하세요.");
    } else {
      setTitleError("");
    }
    if (content === "") {
      setContentError("내용을 입력하세요.");
    } else {
      setContentError("");
    }
    if (name === "" || password === "" || title === "" || content === "") {
      alert("작성할 곳이 남아있습니다.");
    }
    if (
      name !== "" &&
      password !== "" &&
      password === passwordCheck &&
      title !== "" &&
      content !== ""
    ) {
      alert("가입이 완료되었습니다.");
    }
  };

  return (
    //html 쓰는곳 //
    <Wrapper>
      <Header>게시물 등록</Header>
      <HeaderBox>
        <ProfileBox>
          <Head>
            <HeadText>작성자</HeadText>
            <Box
              type="text"
              placeholder="이름을 적어주세요."
              onChange={onChangeName}
            />
            <ErrorBox>{nameError}</ErrorBox>
          </Head>

          <Head>
            <HeadText>제목</HeadText>
            <Box
              type="text"
              placeholder="제목을 작성해주세요."
              onChange={onChangeTitle}
            />
            <ErrorBox>{titleError}</ErrorBox>
          </Head>
        </ProfileBox>

        <PasswordBox>
          <Head>
            <HeadText>비밀번호</HeadText>
            <Box
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={onChangePassword}
            />
            <ErrorBox>{passwordError}</ErrorBox>
          </Head>

          <Head>
            <HeadText>비밀번호 확인</HeadText>
            <Box
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요."
              onChange={onChangePasswordCheck}
            />
            <ErrorBox>{passwordCheckError}</ErrorBox>
          </Head>
        </PasswordBox>
      </HeaderBox>

      <Head>
        <HeadText>내용</HeadText>
        <ContentsBox
          type="text"
          placeholder="내용을 작성해주세요."
          onChange={onChangeContent}
        />
        <ErrorBox>{contentError}</ErrorBox>
      </Head>

      <HeadText>주소</HeadText>
      <Address>
        <AddressNumber type="text" placeholder="07250" />
        <AddressSearch>우편번호 검색</AddressSearch>
      </Address>
      <HeadBox type="text" />
      <HeadBox type="text" />

      <Head>
        <HeadText>유튜브</HeadText>
        <HeadBox type="text" placeholder="링크를복사해주세요." />
      </Head>
      <BottomBox>
        <HeadText>사진첨부</HeadText>
        <PictureBox>
          <Picture>
            <p>➕</p>
            <p>Upload</p>
          </Picture>
          <Picture>
            <p>➕</p>
            <p>Upload</p>
          </Picture>
          <Picture>
            <p>➕</p>
            <p>Upload</p>
          </Picture>
        </PictureBox>

        <HeadText>메인 설정</HeadText>
        <SelectBox>
          <SelectYoutube>
            <Select type="radio" name="select" />
            유튜브
          </SelectYoutube>
          <SelectPicture>
            <Select type="radio" name="select" />
            사진
          </SelectPicture>
        </SelectBox>
      </BottomBox>
      <Register>
        <RegisterButton onClick={handleRegister}>등록하기</RegisterButton>
      </Register>
    </Wrapper>
  );
}
