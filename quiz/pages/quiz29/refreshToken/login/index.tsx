import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../src/commons/store";

// 토큰 만료시간 5초
const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function QuizLoginPage() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);
  const router = useRouter();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        email,
        password,
      },
    });
    const accessToken = result.data.loginUserExample.accessToken;
    setAccessToken(accessToken);
    alert("로그인에 성공하셨습니다.");
    router.push("/quiz29/refreshToken/loginSuccess/");
  };

  return (
    <>
      <div>
        이메일: <input type="text" onChange={onChangeEmail} />
      </div>
      <br />
      <div>
        비밀번호: <input type="password" onChange={onChangePassword} />
      </div>
      <br />
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}
