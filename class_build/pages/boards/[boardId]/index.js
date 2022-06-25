import Head from "next/head";
import { gql, request } from "graphql-request";
import { useRouter } from "next/router";

export default function BoardDetailPage(props) {
  const router = useRouter();
  console.log(props.boardId);
  return (
    <div>
      <Head>
        <meta property="og:title" content={props.myBoardData?.title} />
        <meta property="og:description" content={props.myBoardData?.contents} />
        <meta property="og:image" content={props.myBoardData?.images[0]} />
      </Head>
      <div>
        안녕하세요! 게시글 상세 페이지 입니다. 게시글 ID는
        {props.boardId}입니다.
      </div>
    </div>
  );
}

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      title
      contents
      images
    }
  }
`;

// 이 페이지는 서버사이드 랜더링 할 페이지
export const getSeverSideProps = async (context) => {
  // 데이터 요청할 것
  // const {data} = useQuery(FETCH_BOARD); -> 이건 불가능
  const result = await request(
    "https://backend06.codebootcamp.co.kr/graphql",
    FETCH_BOARD,
    { boardId: context.query.boardId }
  );

  return {
    props: {
      data: {
        myBoardData: {
          title: result.fetchBoard.title,
          contents: result.fetchBoard.contents,
          images: result.fetchBoard.images,
        },
      },
    },
  };
};
