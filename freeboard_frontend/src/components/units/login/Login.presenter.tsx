import * as S from "./Login.styles";

export default function LoginPageUI(props) {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>로그인</S.HeaderWrapper>
      <S.HeaderComments>카카오톡,네이버,구글로도</S.HeaderComments>
      <S.HeaderComments>로그인할 수 있을 것 같아? 어림도 없어</S.HeaderComments>
      <S.LoginInput
        type="text"
        placeholder="이메일을 입력하세요"
        onChange={props.onChangeInput("email")}
      />
      <S.LoginInput
        type="password"
        placeholder="비밀번호를 입력하세요"
        onChange={props.onChangeInput("password")}
      />
      <S.LoginButton onClick={props.onClickLogIn}>로그인</S.LoginButton>
      <S.LoginOrDiv>
        <S.LoginOrCenterLine></S.LoginOrCenterLine>
        <span>또는</span>
        <S.LoginOrCenterLine></S.LoginOrCenterLine>
      </S.LoginOrDiv>
      <S.KakaoLoginButton>카카오로 로그인</S.KakaoLoginButton>
      <S.NaverLoginButton>네이버로 로그인</S.NaverLoginButton>
      <S.GoogleLoginButton>구글로 로그인</S.GoogleLoginButton>
      <S.LoginBottomMenu>
        <S.LoginBottomMenuButton onClick={props.onClickMoveRegister}>
          아이디 찾기
        </S.LoginBottomMenuButton>
        <S.LoginBottomMenuSideBar></S.LoginBottomMenuSideBar>
        <S.LoginBottomMenuButton onClick={props.onClickMoveRegister}>
          비밀번호 찾기
        </S.LoginBottomMenuButton>
        <S.LoginBottomMenuSideBar></S.LoginBottomMenuSideBar>
        <S.LoginBottomMenuButton onClick={props.onClickMoveRegister}>
          회원가입
        </S.LoginBottomMenuButton>
      </S.LoginBottomMenu>
    </S.Wrapper>
  );
}
