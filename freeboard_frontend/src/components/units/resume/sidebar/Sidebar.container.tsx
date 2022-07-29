import { useRouter } from "next/router";
import SidebarUI from "./Sidebar.presenter";

const Sidebar = () => {
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
      <SidebarUI
        onClickMoveHome={onClickMoveHome}
        onClickCopyEmail={onClickCopyEmail}
      />
    </>
  );
};
export default Sidebar;
