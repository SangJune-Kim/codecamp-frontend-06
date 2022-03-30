import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
`;
const BoardsDetail = styled.div`
  display: flex;
  flex-direction: column;
  /* width: ; */
`;
const BoardsHeader = styled.div``;

const LevelUpQuizPage = () => {
  return (
    <Wrapper>
      <BoardsHeader>
        <BoardsDetail>
          {" "}
          <input type="checkbox" />
        </BoardsDetail>
        <BoardsDetail>
          {" "}
          <input type="checkbox" />
        </BoardsDetail>
        <BoardsDetail>
          {" "}
          <input type="checkbox" />
        </BoardsDetail>
        <BoardsDetail>
          {" "}
          <input type="checkbox" />
        </BoardsDetail>
        <BoardsDetail>
          {" "}
          <input type="checkbox" />
        </BoardsDetail>
        <BoardsDetail>
          {" "}
          <input type="checkbox" />
        </BoardsDetail>
        <BoardsDetail>
          {" "}
          <input type="checkbox" />
        </BoardsDetail>
      </BoardsHeader>
    </Wrapper>
  );
};

export default LevelUpQuizPage;
