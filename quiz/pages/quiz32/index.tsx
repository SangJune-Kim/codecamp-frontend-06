import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function QuizOptimisticUIPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "6267b28fa8255b002988ccc8" },
  });
  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickLike = async () => {
    await likeBoard({
      variables: {
        boardId: "6267b28fa8255b002988ccc8",
      },
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD,
      //     variables: { boardId: "6267b28fa8255b002988ccc8" },
      //   },
      // ],
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "6267b28fa8255b002988ccc8" },
          data: {
            fetchBoard: {
              _id: "6267b28fa8255b002988ccc8",
              __typename: "Board",
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>{data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike}>좋아요 up</button>
    </>
  );
}
