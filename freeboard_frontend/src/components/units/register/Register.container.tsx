import { useRouter } from "next/router";
import RegisterUI from "./Register.Presenter";

export default function Register() {
  const router = useRouter();
  const onClickMoveLogin = () => {
    router.push("/login");
  };
  return <RegisterUI onClickMoveLogin={onClickMoveLogin} />;
}
