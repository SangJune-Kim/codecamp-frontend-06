import Link from "next/link";
import * as R from "./Sidebar.styles";

const SidebarUI = (props) => {
  return (
    <R.Container>
      <R.BackImage />
      <R.Wrapper>
        <R.ProfilePicture />
        <h1>김상준</h1>
        <R.NameUnderLine />
        <h3>FRONTEND DEVELOPER</h3>
        <p>
          새로운 배움을 즐기는
          <br />
          프론트엔드 개발자입니다
        </p>
        <R.MenuWrapper>
          <span>resume</span>
          <span>portfolio</span>
        </R.MenuWrapper>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
        {/* <R.SNSWrapper>
          <Link href={"https://github.com/SangJune-Kim"}>
            <img src="/resume/github.png" />
          </Link>
          <Link href={"https://walkingkim.tistory.com/"}>
            <img src="/resume/tistory.png" />
          </Link>
          <img src="/resume/mail.png" onClick={props.onClickCopyEmail} />
        </R.SNSWrapper> */}
      </R.Wrapper>
    </R.Container>
  );
};
export default SidebarUI;
