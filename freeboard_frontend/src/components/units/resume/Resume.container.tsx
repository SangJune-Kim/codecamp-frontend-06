import { useRouter } from "next/router";
import ResumeUI from "./Resume.presenter";

const Resume = () => {
  const router = useRouter();

  const onClickMoveHome = () => {
    router.push("/home/");
  };

  const onClickCopyEmail = async () => {
    await navigator.clipboard.writeText("ghfnsgldl@gmail.com");
    alert("복사되었습니다.");
  };
  return (
    <>
      <ResumeUI
        onClickMoveHome={onClickMoveHome}
        onClickCopyEmail={onClickCopyEmail}
      />
    </>
  );
};
export default Resume;
