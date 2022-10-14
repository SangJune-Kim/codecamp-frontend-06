import * as S from "./Register.styles";

export default function RegisterUI(props) {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>회원가입</S.HeaderWrapper>
      <form onSubmit={props.handleSubmit(props.onClickRegister)}>
        <S.NecessaryWrapper>
          <S.NameBox>
            <S.InputTitle>이름</S.InputTitle>
            <S.ProfileInput
              type="text"
              placeholder="이름을 입력하세요"
              {...props.register("name")}
            />
            <S.ProfileError>
              {props.formState.errors.name?.message}
            </S.ProfileError>
          </S.NameBox>
          <S.EmailBox>
            <S.InputTitle>이메일</S.InputTitle>
            <S.ProfileInput
              type="text"
              placeholder="이메일을 입력하세요"
              {...props.register("email")}
            />
            <S.ProfileError>
              {props.formState.errors.email?.message}
            </S.ProfileError>
          </S.EmailBox>
          <S.PasswordBox>
            <S.InputTitle>비밀번호</S.InputTitle>
            <S.ProfileInput
              type="password"
              placeholder="특수문자를 포함한 10 글자 이상"
              {...props.register("password")}
            />
            <S.ProfileError>
              {props.formState.errors.password?.message}
            </S.ProfileError>
          </S.PasswordBox>
          {/* <S.PhoneCheckBox>
            <S.InputTitle> 휴대폰 번호 입력</S.InputTitle>
            <S.ProfileInput
              type="text"
              placeholder="'-'를 제외하고 번호만 입력하세요"
            />
          </S.PhoneCheckBox>
          <S.PhoneCheckValidation>
            <S.PhoneCheckButton>인증번호 전송</S.PhoneCheckButton>
            <S.PhoneCheckInput type="text" />
          </S.PhoneCheckValidation> */}
          <S.RegisterButton
            type="submit"
            // onClick={props.onClickRegister}
            isActive={props.formState.isValid}
          >
            회원가입
          </S.RegisterButton>
        </S.NecessaryWrapper>
      </form>
      <S.LoginButton onClick={props.onClickMoveLogin}>
        로그인 페이지로
      </S.LoginButton>
    </S.Wrapper>
  );
}
