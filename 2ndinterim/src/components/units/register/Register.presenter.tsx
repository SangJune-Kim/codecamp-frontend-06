import * as S from "./Register.styles";

export default function RegisterUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickRegister)}>
      <S.Wrapper>
        <S.HeaderWrapper>
          <S.HeaderTitle>회원가입</S.HeaderTitle>
          <S.HeaderComments>Sign up</S.HeaderComments>
        </S.HeaderWrapper>
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

          <S.RegisterButton
            type="submit"
            // onClick={props.onClickRegister}
            isActive={props.formState.isValid}
          >
            회원가입
          </S.RegisterButton>
        </S.NecessaryWrapper>

        <div onClick={props.onClickMoveLogin}>로그인</div>
      </S.Wrapper>
    </form>
  );
}
