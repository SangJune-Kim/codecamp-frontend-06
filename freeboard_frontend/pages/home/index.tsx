import styled from "@emotion/styled";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1050px;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0px;
`;

const ExamWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Exam = styled.button`
  display: flex;
`;

const Level = styled.div`
  display: ${(props) => (props.openLevel ? "y" : "none")};
`;

const examTitle = ["시험 1", "시험 2", "시험 3", "시험 4", "시험 5"];

export default function HomePage() {
  const [openLevel, setOpenLevel] = useState(false);

  const onClickExam = () => {
    setOpenLevel((prev) => !prev);
  };

  return (
    <Container>
      <div>
        <div>버튼 테스트</div>
        <div>
          시험 선택 라인
          <ExamWrapper>
            {examTitle.map((el) => (
              <div key={el}>
                <Exam onClick={onClickExam}>{el}</Exam>
              </div>
            ))}
          </ExamWrapper>
        </div>
        <div>
          난이도 선택 라인
          <Level openLevel={openLevel}>
            <button>초급</button>
            <button>중급</button>
            <button>고급</button>
          </Level>
        </div>
      </div>
      <Footer>
        <div>수업 선택 라인</div>
      </Footer>
    </Container>
  );
}
