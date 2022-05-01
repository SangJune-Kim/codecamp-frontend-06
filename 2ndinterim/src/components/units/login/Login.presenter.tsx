import * as S from "./Login.styles";

export default function LoginPageUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLogIn)}>
      <S.Wrapper>
        <S.HeaderWrapper>
          <S.HeaderTitle>로그인</S.HeaderTitle>
          <S.HeaderComments>Login</S.HeaderComments>
        </S.HeaderWrapper>

        <S.LoginInputWrapper>
          <S.LoginInput
            type="text"
            placeholder="이메일을 입력하세요"
            {...props.register("email")}
          />
          <S.LoginErrorDiv>
            {props.formState.errors.email?.message}
          </S.LoginErrorDiv>
          <S.LoginInput
            type="password"
            placeholder="비밀번호를 입력하세요"
            {...props.register("password")}
          />
          <S.LoginErrorDiv>
            {props.formState.errors.password?.message}
          </S.LoginErrorDiv>
          <S.LoginButton type="submit" onClick={props.onClickLogIn}>
            로그인
          </S.LoginButton>
        </S.LoginInputWrapper>
        <S.LoginBottomMenu>
          <S.LoginBottomComment> 아직 계정이 없으신가요?</S.LoginBottomComment>
          <S.LoginBottomMenuButton onClick={props.onClickMoveRegister}>
            회원가입
          </S.LoginBottomMenuButton>
        </S.LoginBottomMenu>
      </S.Wrapper>
    </form>
  );
}
