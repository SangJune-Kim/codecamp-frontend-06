import * as R from "./Main.styles";

const MainUI = () => {
  return (
    <R.Container>
      <R.Wrapper>
        <h1>Resume</h1>
        <R.Introduce>
          <p>
            새로운 경험과 배움을 즐기고 사용자를 위한 이유있는 코드, 로직,
            기획을 지향합니다.
          </p>
          <p>
            직관적이고 사용하기 편한 웹 서비스를 만드는 것을 목표로 수업과 팀
            프로젝트를 하며 익혔던 기술들을 다듬고 공부하고 있습니다.
          </p>
          <p>
            - 백앤드 개발자, 디자이너와 협업하는 프로젝트를 수행한 경험이
            있습니다.
            <br />
            - React, Next.js, Typescript, Emotion, Apollo-Client, Graphql을
            활용해 웹 프로젝트 개발 경험이 있습니다.
            <br />- 12주 과정의 부트캠프를 수료한 후 꾸준히 팀 프로젝트 리팩토링
            및 개발 지식에 대한 스터디를 진행하고 있습니다.
          </p>
        </R.Introduce>
        <R.Profile>Contact</R.Profile>
      </R.Wrapper>
    </R.Container>
  );
};
export default MainUI;
