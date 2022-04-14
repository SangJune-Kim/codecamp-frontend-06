import { useRouter } from "next/router";
import LoginPageUI from "./Login.presenter";

export default function LoginPage() {
  const router = useRouter();

  const onClickMoveHome = () => {
    router.push("/home/");
  };

  return <LoginPageUI onClickMoveHome={onClickMoveHome} />;
}
