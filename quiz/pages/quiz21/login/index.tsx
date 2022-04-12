import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store";

const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogIn = async () => {
    try {
      const result = await loginUser({
        variables: {
          email: email,
          password: password,
        },
      });
      const accessToken = result.data.loginUser.accessToken;
      setAccessToken(accessToken);

      alert("로그인에 성공하였습니다.");
      router.push("/quiz21/success");
    } catch (error) {
      if (error instanceof Error) alert("회원가입을 하셔아죠");
      location.reload();
    }
  };

  return (
    <>
      <div>
        아이디:
        <input
          type="text"
          onChange={onChangeEmail}
          placeholder="email을 입력하세요"
        />
      </div>
      <div>
        비밀번호: <input type="password" onChange={onChangePassword} />
      </div>
      <button onClick={onClickLogIn}>로그인</button>
    </>
  );
}
