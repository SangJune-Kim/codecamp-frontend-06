import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const FetchBoardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;
const Col = styled.div`
  width: 30%;
`;

const CreateBoardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SubmitButton = styled.button`
  cursor: pointer;
`;

export default function QuizApolloCacheState() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);
  const [changeInputs, setChangeInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const onClickDelete = (boardId: string) => async () => {
    await deleteBoard({
      variables: { boardId },
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARDS,
      //   },
      // ],
      update(cache, { data }) {
        const deletedId = data.deleteBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const onChangeInputs = (id) => (event) => {
    setChangeInputs({
      ...changeInputs,
      [id]: event.target.value,
    });
  };

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          ...changeInputs,
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
      //   refetchQueries: [
      //     {
      //       query: FETCH_BOARDS,
      //     },
      //   ],
    });
    console.log(result);
  };

  return (
    <>
      <FetchBoardsWrapper>
        {data?.fetchBoards.map((el) => (
          <Row key={el._id}>
            <Col>{el.writer}</Col>
            <Col>{el.title}</Col>
            <Col>{el.contents}</Col>
            <button onClick={onClickDelete(el._id)}>✕</button>
          </Row>
        ))}
      </FetchBoardsWrapper>
      <CreateBoardWrapper>
        <div>
          작성자: <input type="text" onChange={onChangeInputs("writer")} />
          비밀번호:
          <input type="password" onChange={onChangeInputs("password")} />
        </div>
        <div>
          제목:
          <input type="text" onChange={onChangeInputs("title")} />
          내용:
          <input type="text" onChange={onChangeInputs("contents")} />
        </div>
        <SubmitButton onClick={onClickSubmit}>게시물 등록하기</SubmitButton>
      </CreateBoardWrapper>
    </>
  );
}
