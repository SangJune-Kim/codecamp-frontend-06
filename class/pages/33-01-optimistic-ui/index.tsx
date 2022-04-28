import { gql, useMutation, useQuery } from "@apollo/client";
// import { Modal } from "antd";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
      dislikeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

// const DISLIKE_BOARD = gql`
//         mutation dislikeBoard($boardId:ID!){
//             dislikeBoard(boardId:$boardId)
//
//         }
//     `;

export default function OptimisticUIPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: "6267b28fa8255b002988ccc8",
    },
  });

  const [likeBoard] = useMutation(LIKE_BOARD);
  //   const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const onClickOptimisticUI = async () => {
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
      <div>
        <h1>옵티미스틱UI</h1>
        <div>현재카운트(좋아요):{data?.fetchBoard.likeCount} </div>
        <button onClick={onClickOptimisticUI}>좋아요 올리기!</button>
      </div>
    </>
  );
}
