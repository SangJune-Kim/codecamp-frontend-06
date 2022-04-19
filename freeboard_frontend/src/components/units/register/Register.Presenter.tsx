import * as S from "./Register.styles";

export default function RegisterUI(props) {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>회원가입</S.HeaderWrapper>
      <S.NecessaryWrapper>
        <S.NameBox>
          <S.InputTitle>이름</S.InputTitle>
          <S.ProfileInput type="text" />
        </S.NameBox>
        <S.EmailBox>
          <S.InputTitle>이메일</S.InputTitle>
          <S.ProfileInput type="text" />
        </S.EmailBox>
        <S.PasswordBox>
          <S.InputTitle>비밀번호</S.InputTitle>
          <S.ProfileInput
            type="password"
            placeholder="특수문자를 포함한 10 글자 이상"
          />
        </S.PasswordBox>
        <S.PhoneCheckBox>
          <S.InputTitle> 휴대폰 번호 입력</S.InputTitle>
          <S.ProfileInput
            type="text"
            placeholder="'-'를 제외하고 번호만 입력하세요"
          />
        </S.PhoneCheckBox>
        <S.PhoneCheckValidation>
          <S.PhoneCheckButton>인증번호 전송</S.PhoneCheckButton>
          <S.PhoneCheckInput type="text" />
        </S.PhoneCheckValidation>
      </S.NecessaryWrapper>
      <div>
        <div>주소</div>
      </div>
      <div>
        <div>동의</div>
      </div>
      <S.RegisterButton>회원가입</S.RegisterButton>
      <div onClick={props.onClickMoveLogin}>로그인</div>
    </S.Wrapper>
  );
}
